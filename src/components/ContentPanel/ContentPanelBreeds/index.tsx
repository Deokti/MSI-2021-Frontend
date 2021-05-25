import React, { ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';
import Navigation from '../../Navigation';
import { getBreedsRequest, setBreedsActiveDog, setLimit, setFilterDogName, setSortedBreeds } from '../../../actions/breeds';

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
import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai';
import { filterDogsByName } from '../../../utils/filter-dogs-by-name';
import clsx from 'clsx';
import { getSortedBreeds } from '../../../utils/get-sorted-breeds';

interface ContentPanelBreedsProps {
  getBreedsRequest: () => any
  setBreedsActiveDog: (dog: IResponseBreed) => any
  breeds: IBreeds
  setLimit: (limit: number) => any
  setFilterDogName: (dogName: string) => any
  setSortedBreeds: (sort: 'ASC' | 'DESC') => any
}

function ContentPanelBreeds({ getBreedsRequest, breeds, setBreedsActiveDog, setLimit, setFilterDogName, setSortedBreeds }: ContentPanelBreedsProps): ReactElement<ContentPanelBreedsProps> {
  useEffect(() => getBreedsRequest(), [getBreedsRequest]);

  function onSetLimit(defaultValue: number | string) {
    setLimit(Number(defaultValue));
  }

  function onSetFilterDogName(defaultValue: string | number) {
    setFilterDogName(defaultValue as string);
  }

  function getBreedsAllDogs(): Array<string> | null {
    const result = breeds.data && breeds.data.reduce((acc, value) => {
      acc.push(translateNameDogs(value.name))
      return acc;
    }, ['Все породы'])

    if (result) {
      // Сортируем все элементы, кроме первого
      const [first, ...other] = result && result;
      return [first, ...other.sort()];
    }

    return [];
  }

  return (
    <div className="content-panel-breeds content-panel-background">
      <header className="content-panel-breeds__header">
        <Navigation />
        <SelectInput
          values={getBreedsAllDogs()}
          defaultValue={breeds && breeds.filterDogName as string}
          getValueByList={onSetFilterDogName}
          margin="0 10px 0 0"
        />

        <SelectInput
          values={[5, 10, 15, 20]}
          label="Лимит"
          defaultValue={breeds && breeds.limit}
          getValueByList={onSetLimit}
          margin="0 10px 0 0"
        />
        <Button className={clsx('content-panel-breeds__sort', { 'is-active': breeds.sorted === 'DESC' })} onClick={() => setSortedBreeds("DESC")}>
          <AiOutlineSortDescending color="#8C8C8C" size={25} />
        </Button>

        <Button className={clsx('content-panel-breeds__sort', { 'is-active': breeds.sorted === 'ASC' })} onClick={() => setSortedBreeds('ASC')}>
          <AiOutlineSortAscending color="#8C8C8C" size={25} />
        </Button>
      </header>

      {breeds.loading
        ? <LoadingSpinner />
        : (
          <ul className="content-panel-breeds__list scroll">
            {
              breeds.data && filterDogsByName(
                breeds && breeds.filterDogName,
                getSortedBreeds(breeds && breeds.sorted, breeds && breeds.data)
              )
                .slice(0, breeds.limit)
                .map((breed) => {
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

export default connect(mapStateToProps, { getBreedsRequest, setBreedsActiveDog, setLimit, setFilterDogName, setSortedBreeds })(ContentPanelBreeds);