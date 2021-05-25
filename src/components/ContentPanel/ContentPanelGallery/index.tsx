import React, { useEffect, ReactElement } from 'react';
import { AiOutlineUpload } from 'react-icons/ai';
import { connect } from 'react-redux';
import { IGallery } from '../../../interfaces/reducers';
import { IStore } from '../../../interfaces/store';
import Button from '../../Button';
import Navigation from '../../Navigation';
import { getGalleryRequest } from '../../../actions/gallery';

import './style.scss';

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

      </div>


    </div>
  )
}

const mapStateToProps = ({ gallery }: IStore) => ({ gallery })

export default connect(mapStateToProps, { getGalleryRequest })(ContentPanelGallery)