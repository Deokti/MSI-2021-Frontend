import React, { ReactElement } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { IBreeds } from '../../../interfaces/reducers';
import { IStore } from '../../../interfaces/store';
import Navigation from '../../Navigation';
import { setActiveControlPath } from '../../../actions/management';


// Когда нажимаем на brreds, то переходим на /breeds
// Когда нажимаем на собаку в одном из breeds, то переходим на /breeds/1
// Таким образом можно записывать эти данные в путь и затем в Navigation обрабатываеть его, 
// разбивая на массив и затем показывания текущий путь

import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTER_PATH } from '../../../config/ROUTER_PATH';
import './style.scss';
import { IResponseBreed } from '../../../interfaces/response';
import { translateTemparement } from '../../../utils/translate-temperament';

interface ContentPanelBreedProps {
  activeDog: IResponseBreed | null
  setActiveControlPath: (path: null | string | Array<string>) => any
}

function ContentPanelBreed({ activeDog, setActiveControlPath }: ContentPanelBreedProps): ReactElement<ContentPanelBreedProps> {
  const { push } = useHistory();

  const onLoadComponent = useCallback(() => {
    const sup = activeDog && activeDog?.id;

    if (sup === null) {
      return push(ROUTER_PATH.breeds);
    }

    setActiveControlPath(`/${ROUTER_PATH.breeds}/${String(sup)}`);
  }, [activeDog, push, setActiveControlPath])

  useEffect(() => {
    onLoadComponent();
  }, [onLoadComponent, setActiveControlPath]);

  return (
    <article className="content-panel-breed content-panel-background">
      <Navigation />

      <div className="content-panel-breed__content">
        <span
          className="content-panel-breed__image"
          style={{ backgroundImage: `url('${activeDog && activeDog.image.url}')` }}
        />

        <div className="content-panel-breed__description">
          <h2 className="content-panel-breed__name">{activeDog && activeDog.name}</h2>
          <h3 className="content-panel-breed__family">{activeDog && activeDog.breed_group}</h3>

          <div className="content-panel-breed__detailed">
            <div className="content-panel-breed__title">
              Темперамент:
              <span className="content-panel-breed__subtitle content-panel-breed__subtitle--relocate">
                {activeDog && translateTemparement(activeDog.temperament)}
              </span>

            </div>

            <ul className="content-panel-breed__list">
              <li className="content-panel-breed__title">
                Высота: <span className="content-panel-breed__subtitle"> {activeDog && activeDog.height.metric} см в холке</span>
              </li>
              <li className="content-panel-breed__title">
                Вес: <span className="content-panel-breed__subtitle"> {activeDog && activeDog.weight.metric} кг</span>
              </li>
              <li className="content-panel-breed__title">
                Продолжительность жизни: <span className="content-panel-breed__subtitle"> {`${activeDog && activeDog.life_span.slice(0, -5)} лет`}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  )
}




const mapStateToProps = ({ breeds: { activeDog } }: IStore) => ({ activeDog })

export default connect(mapStateToProps, { setActiveControlPath })(ContentPanelBreed);
