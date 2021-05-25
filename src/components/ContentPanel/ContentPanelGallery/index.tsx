import React, { useEffect, ReactElement } from 'react';
import { AiOutlineUpload } from 'react-icons/ai';
import { connect } from 'react-redux';
import { IGallery } from '../../../interfaces/reducers';
import { IStore } from '../../../interfaces/store';
import Button from '../../Button';
import Navigation from '../../Navigation';
import { getGalleryRequest } from '../../../actions/gallery';

import './style.scss';
import { ContentPanelGallerySelect } from './ContentPanelGallerySelect';

interface ContentPanelGalleryProps {
  gallery: IGallery
  getGalleryRequest: () => any
}

function ContentPanelGallery({ gallery, getGalleryRequest }: ContentPanelGalleryProps): ReactElement<ContentPanelGalleryProps> {
  useEffect(() => gallery.data === null ? getGalleryRequest() : null, [gallery.data, getGalleryRequest]);

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

      <div className="content-panel-gallery_selects">
        <ContentPanelGallerySelect
          title="Порядок"
          maxWidth={300}
          minWidth={290}
          defaultValue="Случайно"
          values={['Случайно', 'ASC', 'DESK']}
        />
        <ContentPanelGallerySelect
          title="Типы"
          defaultValue="Случайно"
          maxWidth={300}
          minWidth={290}
          values={['Случайно', 'ASC', 'DESK']}
        />
        <ContentPanelGallerySelect
          title="Порода"
          maxWidth={300}
          minWidth={290}
          defaultValue="Случайно"
          values={['Первая порода', 'Вторая порода', 'Третья порода']}
        />
        <ContentPanelGallerySelect
          title="Лимит"
          maxWidth={300}
          minWidth={290}
          defaultValue="5 элементов на странице"
          values={['5 элементов на странице', '10 элементов на странице', '15 элементов на странице', '20 элементов на странице']}
        />
      </div>


    </div>
  )
}

const mapStateToProps = ({ gallery }: IStore) => ({ gallery })

export default connect(mapStateToProps, { getGalleryRequest })(ContentPanelGallery)