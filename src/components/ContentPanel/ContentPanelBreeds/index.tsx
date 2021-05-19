import React, { ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';
import Navigation from '../../Navigation';
import { getBreedsRequest, setBreedsActiveDog } from '../../../actions/breeds';

import './style.scss';
import { IStore } from '../../../interfaces/store';
import { IBreeds } from '../../../interfaces/reducers';
import { LoadingSpinner } from '../../LoadingSpinner';
import Button from '../../Button';
import { IResponseBreed } from '../../../interfaces/response';
import { Link } from 'react-router-dom';

interface ContentPanelBreedsProps {
  getBreedsRequest: (limit: number) => any
  setBreedsActiveDog: (dog: IResponseBreed) => any
  breeds: IBreeds
}

function ContentPanelBreeds({ getBreedsRequest, breeds, setBreedsActiveDog }: ContentPanelBreedsProps): ReactElement<ContentPanelBreedsProps> {
  useEffect(() => breeds.data === null ? getBreedsRequest(breeds.limit) : null, [breeds, getBreedsRequest]);

  return (
    <div className="content-panel-breeds content-panel-background">
      <header>
        <Navigation />
      </header>

      {breeds.loading
        ? <LoadingSpinner />
        : (
          <ul className="content-panel-breeds__list">
            {
              breeds.data && breeds.data.map((breed) => {
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
                          {breed.name}
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

export default connect(mapStateToProps, { getBreedsRequest, setBreedsActiveDog })(ContentPanelBreeds);