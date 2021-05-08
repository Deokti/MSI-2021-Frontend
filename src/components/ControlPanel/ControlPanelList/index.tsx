import React, { ReactElement } from 'react';
import { ControlPanelItem } from '../ControlPanelItem';
import { connect } from 'react-redux';
import './style.scss';
import { IStore } from '../../../types/store';
import { IManagementState } from '../../../types/reducers';
import { setActiveControl } from '../../../actions';

interface ControlPanelListProps {
  management: IManagementState
  setActiveControl: (text: string) => void
}

function ControlPanelList({ management, setActiveControl }: ControlPanelListProps): ReactElement<ControlPanelListProps> {

  return (
    <div className="control-list">
      <h2 className="control-list__title">Давайте начнем использовать Dogs API</h2>

      <ul className="control-list__items">
        {management && management.controls.map((item) => {
          const { text } = item;

          return (
            <li key={text}
              className='control-list__item'
              onClick={() => setActiveControl(text)}
            >
              <ControlPanelItem {...item} active={text === management.active} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = ({ management }: IStore) => ({ management });

export default connect(mapStateToProps, { setActiveControl })(ControlPanelList);