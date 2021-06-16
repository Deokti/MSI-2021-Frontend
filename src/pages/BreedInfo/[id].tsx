import React, { ReactElement } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { IStore } from '../../interfaces/store';
import Navigation from '../../components/Navigation';
import { setActiveControlPath } from '../../actions/management';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTER_PATH } from '../../config/ROUTER_PATH';
import './style.scss';
import { IResponseBreed } from '../../interfaces/response';
import { translateTemparement } from '../../utils/translate-temperament';
import { translateNameDogs } from '../../utils/translate-name-dogs';

interface ContentPanelBreedProps {
  activeDog: IResponseBreed | null
  setActiveControlPath: (path: null | string | Array<string>) => any
}

function BreedInfo({ activeDog, setActiveControlPath }: ContentPanelBreedProps): ReactElement<ContentPanelBreedProps> {
  const { push } = useHistory();

  const onLoadComponent = useCallback(() => {
    // Проверяем, есть ли активная собака
    const sup = activeDog && activeDog.id;

    // Если её нет, то переводм на страницу с breeds
    if (sup === null) return push(ROUTER_PATH.breeds);

    // Устанавливем путь для REDUX, чтобы заем получить его в Navigation
    setActiveControlPath(`/${ROUTER_PATH.breeds}/${String(sup)}`);
  }, [activeDog, push, setActiveControlPath])

  useEffect(() => {
    onLoadComponent();
  }, [onLoadComponent, setActiveControlPath]);

  return (
    <article className="breed-info content-panel-background">
      <Navigation />

      <div className="breed-info__content">
        <div className="breed-info__image">
          <img src={(activeDog && activeDog.image.url) as string} alt={(activeDog && activeDog.name) as string} />
        </div>

        <div className="breed-info__description">
          <h2 className="breed-info__name">{activeDog && translateNameDogs(activeDog.name)}</h2>
          <h3 className="breed-info__family">{activeDog && activeDog.breed_group}</h3>

          <div className="breed-info__detailed">
            <div className="breed-info__title">
              Темперамент:
              <span className="breed-info__subtitle breed-info__subtitle--relocate">
                {activeDog && translateTemparement(activeDog.temperament)}
              </span>

            </div>

            <ul className="breed-info__list">
              <li className="breed-info__title">
                Высота: <span className="breed-info__subtitle"> {activeDog && activeDog.height.metric} см в холке</span>
              </li>
              <li className="breed-info__title">
                Вес: <span className="breed-info__subtitle"> {activeDog && activeDog.weight.metric} кг</span>
              </li>
              <li className="breed-info__title">
                Продолжительность жизни: <span className="breed-info__subtitle"> {`${activeDog && activeDog.life_span.slice(0, -5)} лет`}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  )
}

const mapStateToProps = ({ breeds: { activeDog } }: IStore) => ({ activeDog })

export default connect(mapStateToProps, { setActiveControlPath })(BreedInfo);
