import React, { useCallback, useEffect, ReactElement } from 'react';
import { AiOutlineReload, AiOutlineUpload } from 'react-icons/ai';
import { connect } from 'react-redux';
import { IData, IGallery, IGalleryOrder, IGalleryType } from '../../../interfaces/reducers';
import { IStore } from '../../../interfaces/store';
import Button from '../../Button';
import Navigation from '../../Navigation';
import { getGalleryRequest, IGetGalleryRequestParams, setGalleryType, setGalleryLimit, setGalleryOrder } from '../../../actions/gallery';
import { getBreedsAllDogsRequest } from '../../../actions/data';

import { ContentPanelGallerySelect } from './ContentPanelGallerySelect';
import { LoadingSpinner } from '../../LoadingSpinner';
import './style.scss';
import { BreedsList } from '../../BreedsList';

interface ContentPanelGalleryProps {
  gallery: IGallery
  data: IData
  getGalleryRequest: ({ limit, type }: IGetGalleryRequestParams) => any
  getBreedsAllDogsRequest: () => any
  setGalleryLimit: (limit: number) => any
  setGalleryType: (type: IGalleryType) => any
  setGalleryOrder: (order: IGalleryOrder) => any
}

function ContentPanelGallery({ gallery, getGalleryRequest, data, getBreedsAllDogsRequest, setGalleryLimit, setGalleryType, setGalleryOrder }: ContentPanelGalleryProps): ReactElement<ContentPanelGalleryProps> {
  const getGallery = useCallback(() => gallery.data === null
    ? getGalleryRequest({ limit: gallery.limit, type: gallery.type.request, order: gallery.order.request })
    : null,
    [gallery.data, gallery.limit, gallery.order.request, gallery.type.request, getGalleryRequest]);

  const getBreedsAllDogs = useCallback(() => data.breedsAllDogs === null
    ? getBreedsAllDogsRequest()
    : null,
    [data.breedsAllDogs, getBreedsAllDogsRequest]);

  useEffect(() => { getGallery(); getBreedsAllDogs() }, [getBreedsAllDogs, getGallery]);

  function onSetLimit(value: number | string): void {
    setGalleryLimit(parseInt(value as string));
  }

  function onGalleryType(value: string | number) {

    switch (value) {
      case '??????': {
        return setGalleryType({
          request: 'gif,jpg,png',
          value: '??????'
        });
      }
      case '??????????????????????': {
        return setGalleryType({
          request: 'jpg,png',
          value: '??????????????????????'
        });
      }
      case '????????????????????????': {
        return setGalleryType({
          request: 'gif',
          value: '????????????????????????'
        });
      }
    }
  }

  function onGalleryOrder(value: string | number) {
    switch (value) {
      case '????????????????': {
        return setGalleryOrder({
          request: 'rand',
          value: '????????????????'
        });
      }
      case 'ASC': {
        return setGalleryOrder({
          request: 'asc',
          value: 'ASC'
        });
      }
      case 'DESK': {
        return setGalleryOrder({
          request: 'desc',
          value: 'DESK'
        });
      }
    }
  }

  function onReload() {
    const { limit, type: { request: type }, order: { request: order } } = gallery;
    getGalleryRequest({ limit, type, order });
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
          <span>??????????????????</span>
        </Button>
      </header>

      {gallery.loading
        ? <LoadingSpinner />
        : (
          <React.Fragment>
            <div className="content-panel-gallery__selects">
              <ContentPanelGallerySelect
                title="??????????????"
                maxWidth={300}
                minWidth={290}
                defaultValue={gallery.order.value}
                values={['????????????????', 'ASC', 'DESK']}
                getValueByList={onGalleryOrder}
              />
              <ContentPanelGallerySelect
                title="??????"
                defaultValue={gallery.type.value}
                maxWidth={300}
                minWidth={290}
                values={['??????', '??????????????????????', '????????????????????????']}
                getValueByList={onGalleryType}
              />
              <ContentPanelGallerySelect
                title="????????????"
                maxWidth={300}
                minWidth={290}
                defaultValue={gallery.breed}
                values={['??????????????????????']}
              />
              <ContentPanelGallerySelect
                title="??????????"
                maxWidth={240}
                minWidth={240}
                defaultValue={`${gallery.limit} ?????????????????? ???? ????????????????`}
                getValueByList={onSetLimit}
                values={['5 ?????????????????? ???? ????????????????', '10 ?????????????????? ???? ????????????????', '15 ?????????????????? ???? ????????????????', '20 ?????????????????? ???? ????????????????']}
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

            <BreedsList dogsList={gallery.data} apperance="gallery" />
          </React.Fragment>
        )
      }
    </div>
  )
}

const mapStateToProps = ({ gallery, data }: IStore) => ({ gallery, data })

export default connect(mapStateToProps, { getGalleryRequest, getBreedsAllDogsRequest, setGalleryLimit, setGalleryType, setGalleryOrder })(ContentPanelGallery)