import React, { useCallback, useEffect, ReactElement } from 'react';
import { AiOutlineHeart, AiOutlineReload, AiOutlineUpload } from 'react-icons/ai';
import { connect } from 'react-redux';
import { IData, IGallery } from '../../../interfaces/reducers';
import { IStore } from '../../../interfaces/store';
import Button from '../../Button';
import Navigation from '../../Navigation';
import { getGalleryRequest } from '../../../actions/gallery';
import { getBreedsAllDogsRequest } from '../../../actions/data';
import { setGalleryLimit } from '../../../actions/gallery';

import { ContentPanelGallerySelect } from './ContentPanelGallerySelect';
import { LoadingSpinner } from '../../LoadingSpinner';
import './style.scss';

interface ContentPanelGalleryProps {
  gallery: IGallery
  data: IData
  getGalleryRequest: ({ limit }: { limit: number }) => any
  getBreedsAllDogsRequest: () => any
  setGalleryLimit: (limit: number) => any
}

function ContentPanelGallery({ gallery, getGalleryRequest, data, getBreedsAllDogsRequest, setGalleryLimit }: ContentPanelGalleryProps): ReactElement<ContentPanelGalleryProps> {
  const getGallery = useCallback(() => gallery.data === null
    ? getGalleryRequest({ limit: gallery.limit })
    : null,
    [gallery.data, gallery.limit, getGalleryRequest]);

  const getBreedsAllDogs = useCallback(() => data.breedsAllDogs === null
    ? getBreedsAllDogsRequest()
    : null,
    [data.breedsAllDogs, getBreedsAllDogsRequest]);

  useEffect(() => { getGallery(); getBreedsAllDogs() }, [getBreedsAllDogs, getGallery]);

  function onSetLimit(value: number | string): void {
    setGalleryLimit(parseInt(value as string));
  }

  function onReload() {
    const { limit } = gallery;
    getGalleryRequest({ limit });
  }

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
            <div className="content-panel-gallery__selects">
              <ContentPanelGallerySelect
                title="Порядок"
                maxWidth={300}
                minWidth={290}
                defaultValue={gallery.order}
                values={['Случайно', 'ASC', 'DESK']}
              />
              <ContentPanelGallerySelect
                title="Тип"
                defaultValue={gallery.type}
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
                maxWidth={240}
                minWidth={240}
                defaultValue={`${gallery.limit} элементов на странице`}
                getValueByList={onSetLimit}
                values={['5 элементов на странице', '10 элементов на странице', '15 элементов на странице', '20 элементов на странице']}
              />
              <Button
                width={40}
                height={40}
                borderRadius={10}
                className="content-panel-gallery__reload"
                onClick={onReload}
              >
                <AiOutlineReload color="#FF868E" size={22} />
              </Button>
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

export default connect(mapStateToProps, { getGalleryRequest, getBreedsAllDogsRequest, setGalleryLimit })(ContentPanelGallery)