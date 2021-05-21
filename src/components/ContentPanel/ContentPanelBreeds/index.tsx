import React, { ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';
import Navigation from '../../Navigation';
import { getBreedsRequest, setBreedsActiveDog, setLimit, setFilterDogName } from '../../../actions/breeds';

import { IStore } from '../../../interfaces/store';
import { IBreeds } from '../../../interfaces/reducers';
import { LoadingSpinner } from '../../LoadingSpinner';
import Button from '../../Button';
import { IResponseBreed } from '../../../interfaces/response';
import { Link } from 'react-router-dom';

import './style.scss';
import '../../../assets/styles/scroll.scss';
import { SelectInput } from '../../SelectInput';
import { translateNameDogs } from '../../../utils/translate-name-dogs';

interface ContentPanelBreedsProps {
  getBreedsRequest: () => any
  setBreedsActiveDog: (dog: IResponseBreed) => any
  breeds: IBreeds
  setLimit: (limit: number) => any
  setFilterDogName: (dogName: string) => any
}

function ContentPanelBreeds({ getBreedsRequest, breeds, setBreedsActiveDog, setLimit, setFilterDogName }: ContentPanelBreedsProps): ReactElement<ContentPanelBreedsProps> {
  useEffect(() => getBreedsRequest(), [getBreedsRequest]);

  function onSetLimit(defaultValue: number | string) {
    setLimit(Number(defaultValue));
  }

  function onSetFilterDogName(defaultValue: string | number) {
    setFilterDogName(defaultValue as string);
  }

  function getDogsBreeds(): Array<string> | null {
    const result = ['Все породы'];
    breeds.data && breeds.data.forEach((item) => result.push(translateNameDogs(item.name)))
    return result;
  }

  function filterDogs(filter: string, breeds: Array<IResponseBreed>): Array<IResponseBreed> {
    if (filter === 'Все породы') return breeds;
    return breeds.filter((breed) => translateNameDogs(breed.name) === filter);
  }

  return (
    <div className="content-panel-breeds content-panel-background">
      <header className="content-panel-breeds__header">
        <Navigation />
        <SelectInput
          values={getDogsBreeds()}
          defaultValue={breeds && breeds.filterDogName as string}
          onClick={onSetFilterDogName}
        />

        <SelectInput
          values={[5, 10, 15, 20]}
          label="Лимит"
          defaultValue={breeds && breeds.limit}
          onClick={onSetLimit}
        />
      </header>

      {breeds.loading
        ? <LoadingSpinner />
        : (
          <ul className="content-panel-breeds__list scroll">
            {
              breeds.data && filterDogs(breeds && breeds.filterDogName, breeds && breeds.data)
                .slice(0, breeds.limit).map((breed) => {
                  return (
                    <li
                      className="content-panel-breeds__item"
                      key={breed.id}
                    >
                      <Link to={`/breeds/${breed.id}`} onClick={() => setBreedsActiveDog(breed)}>
                        <div style={{ backgroundImage: `url('${breed.image.url}')` }}>
                          <Button
                            backgroundColor="#fff"
                            borderRadius={10}
                            width={180}
                            color="#FF868E"
                            fontSize={16}
                            className="content-panel-breeds__button"
                          >
                            {translateNameDogs(breed.name)}
                          </Button>
                        </div>
                      </Link>
                    </li>
                  )
                })
            }
          </ul>
        )}
    </div>
  )
}

const mapStateToProps = ({ breeds }: IStore) => ({ breeds });

export default connect(mapStateToProps, { getBreedsRequest, setBreedsActiveDog, setLimit, setFilterDogName })(ContentPanelBreeds);