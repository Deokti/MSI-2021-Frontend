import React, { useCallback, useEffect, ReactElement } from 'react';
import { AiOutlineHeart, AiOutlineUpload } from 'react-icons/ai';
import { connect } from 'react-redux';
import { IData, IGallery } from '../../../interfaces/reducers';
import { IStore } from '../../../interfaces/store';
import Button from '../../Button';
import Navigation from '../../Navigation';
import { getGalleryRequest } from '../../../actions/gallery';
import { getBreedsAllDogsRequest } from '../../../actions/data';

import './style.scss';
import { ContentPanelGallerySelect } from './ContentPanelGallerySelect';
import { LoadingSpinner } from '../../LoadingSpinner';

interface ContentPanelGalleryProps {
  gallery: IGallery
  data: IData
  getGalleryRequest: () => any
  getBreedsAllDogsRequest: () => any
}

function ContentPanelGallery({ gallery, getGalleryRequest, data, getBreedsAllDogsRequest }: ContentPanelGalleryProps): ReactElement<ContentPanelGalleryProps> {
  const getGallery = useCallback(() => gallery.data === null ? getGalleryRequest() : null, [gallery.data, getGalleryRequest]);
  const getBreedsAllDogs = useCallback(() => data.breedsAllDogs === null
    ? getBreedsAllDogsRequest()
    : null,
    [data.breedsAllDogs, getBreedsAllDogsRequest]);

  useEffect(() => { getGallery(); getBreedsAllDogs() }, [getBreedsAllDogs, getGallery]);

  return (
    <div className="content-panel-gallery content-panel-background">
      <header className="content-panel-gallery__header">
        <Navigation />

        <Button
          width={142}
          height={40}
          color="#FF868E"
          borderRadius={10}
          className="content-panel-gallery__upload"
        >
          <AiOutlineUpload color="#FF868E" size={20} />
          <span>ЗАГРУЗИТЬ</span>
        </Button>
      </header>

      {gallery.loading
        ? <LoadingSpinner />
        : (
          <React.Fragment>
            <div className="content-panel-gallery_selects">
              <ContentPanelGallerySelect
                title="Порядок"
                maxWidth={300}
                minWidth={290}
                defaultValue="Случайно"
                values={['Случайно', 'ASC', 'DESK']}
              />
              <ContentPanelGallerySelect
                title="Тип"
                defaultValue="Все"
                maxWidth={300}
                minWidth={290}
                values={['Все', 'Статическая', 'Анимационная']}
              />
              <ContentPanelGallerySelect
                title="Порода"
                maxWidth={300}
                minWidth={290}
                defaultValue={gallery.breed}
                values={data.breedsAllDogs}
              />
              <ContentPanelGallerySelect
                title="Лимит"
                maxWidth={300}
                minWidth={290}
                defaultValue="20 элементов на странице"
                values={['5 элементов на странице', '10 элементов на странице', '15 элементов на странице', '20 элементов на странице']}
              />
            </div>

            <ul className="content-panel-gallery__list scroll">
              {
                gallery.data && gallery.data.map((picture) => {
                  return (
                    <li
                      className="content-panel-gallery__item"
                      key={picture.id}
                    >
                      <div style={{ backgroundImage: `url('${picture.url}')` }} className="content-panel-gallery__image" />
                      <div className="content-panel-gallery__favourite">
                        <Button width={40} height={40} borderRadius={10} className="content-panel-gallery__button">
                          <AiOutlineHeart color="#FF868E" size={25} />
                        </Button>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </React.Fragment>
        )
      }



    </div>
  )
}

const mapStateToProps = ({ gallery, data }: IStore) => ({ gallery, data })

export default connect(mapStateToProps, { getGalleryRequest, getBreedsAllDogsRequest })(ContentPanelGallery)