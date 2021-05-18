import React, { ReactElement } from 'react';
import { ControlPanelItem } from '../ControlPanelItem';
import { connect } from 'react-redux';
import { IStore } from '../../../interfaces/store';
import { IManagementState } from '../../../interfaces/reducers';
import { setActiveControl } from '../../../actions';
import { Link, useHistory, useParams } from 'react-router-dom';
import './style.scss';
import { useEffect } from 'react';

interface ControlPanelListProps {
  management: IManagementState
  setActiveControl: (text: string) => void
}

function ControlPanelList({ management, setActiveControl }: ControlPanelListProps): ReactElement<ControlPanelListProps> {
  const { location } = useHistory();
  useEffect(() => setActiveControl(location.pathname), [location.pathname, setActiveControl]);


  return (
    <div className="control-list">
      <h2 className="control-list__title">Давайте начнем использовать Dogs API</h2>

      <ul className="control-list__items">
        {management && management.controls.map((item) => {
          const { id } = item;

          return (
            <li key={id}
              className='control-list__item'
              onClick={() => setActiveControl(id)}
            >
              <Link to={id}>
                <ControlPanelItem {...item} active={id === management.active} />
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = ({ management }: IStore) => ({ management });

export default connect(mapStateToProps, { setActiveControl })(ControlPanelList);