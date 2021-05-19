import React, { ReactElement } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { IBreeds } from '../../../interfaces/reducers';
import { IStore } from '../../../interfaces/store';
import Navigation from '../../Navigation';
import { setSupActiveControl } from '../../../actions/management';


import './style.scss';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTER_PATH } from '../../../config/ROUTER_PATH';

interface ContentPanelBreedProps {
  breeds: IBreeds
  setSupActiveControl: (root: null | string | number) => any
}

function ContentPanelBreed({ breeds, setSupActiveControl }: ContentPanelBreedProps): ReactElement<ContentPanelBreedProps> {
  const { push } = useHistory();

  const onLoadComponent = useCallback(() => {
    const sup = breeds.activeDog && breeds.activeDog?.id;

    if (sup === null) {
      return push(ROUTER_PATH.breeds);
    }

    setSupActiveControl(sup);
  }, [breeds.activeDog, push, setSupActiveControl])

  useEffect(() => {
    onLoadComponent();

    return () => setSupActiveControl(null);
  }, [breeds.activeDog, onLoadComponent, setSupActiveControl]);

  return (
    <article className="content-panel-breed content-panel-background">
      <Navigation />

      <div className="content-panel-breed__content">
        <span
          className="content-panel-breed__image"
          style={{ backgroundImage: `url('${breeds.activeDog && breeds.activeDog.image.url}')` }}
        />

      </div>
    </article>
  )
}

const mapStateToProps = ({ breeds }: IStore) => ({ breeds })

export default connect(mapStateToProps, { setSupActiveControl })(ContentPanelBreed);
