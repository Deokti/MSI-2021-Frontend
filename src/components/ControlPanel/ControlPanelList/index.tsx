import React, { ReactElement } from 'react';
import { ControlPanelItem } from '../ControlPanelItem';
import { connect } from 'react-redux';
import { IStore } from '../../../interfaces/store';
import { IManagementState } from '../../../interfaces/reducers';
import { setActiveControlPath } from '../../../actions/management';
import { Link, useHistory } from 'react-router-dom';
import './style.scss';
import { useEffect } from 'react';

interface ControlPanelListProps {
  management: IManagementState
  setActiveControlPath: (text: string) => void
}

function ControlPanelList({ management, setActiveControlPath }: ControlPanelListProps): ReactElement<ControlPanelListProps> {
  const { location } = useHistory();
  useEffect(() => setActiveControlPath(location.pathname), [location.pathname, setActiveControlPath]);

  return (
    <div className="control-list">
      <h2 className="control-list__title">Давайте начнем использовать Dogs API</h2>

      <ul className="control-list__items">
        {management && management.controls.map((item) => {
          const { path } = item;

          // Преобразуем первый элемент path из managment, 
          // который является массивом текущего пути, например ['breeds', '2']
          // в похожий на путь к странице, например /breeds или /votes
          const active = (`/${management.currentPath && management.currentPath[0]}`) === path;

          return (
            <li key={path}
              className='control-list__item'
              onClick={() => setActiveControlPath(path)}
            >
              <Link to={path}>
                <ControlPanelItem {...item} active={active || false} />
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = ({ management }: IStore) => ({ management });

export default connect(mapStateToProps, { setActiveControlPath })(ControlPanelList);