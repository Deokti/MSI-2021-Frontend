import React, { ReactElement, useEffect } from 'react';
import Button from '../../Button';
import { getVotingRequest, getVotingHistory } from '../../../actions';
import { connect } from 'react-redux';
import { IStore } from '../../../interfaces/store';
import { IVoting } from '../../../interfaces/reducers';
import { BeatLoader } from 'react-spinners';
import { BUTTONS } from './buttons';
import { addedByVoting } from '../../../utils/added-by-voting';
import './style.scss';

interface ContentPanelVotingProps {
  getVotingRequest: () => any
  getVotingHistory: () => any
  voting: IVoting
}

function ContentPanelVoting({ getVotingRequest, getVotingHistory, voting }: ContentPanelVotingProps): ReactElement<ContentPanelVotingProps> {
  useEffect(() => {
    getVotingRequest();
    getVotingHistory();
  }, [getVotingHistory, getVotingRequest]);

  return (
    <div className="content-panel-voting">
      {voting.loading
        ? <BeatLoader size={20} />
        : (
          <React.Fragment>
            <header className="content-panel-voting__header">
              <div className="content-panel-voting__image"
                style={{ backgroundImage: `url('${voting.VOTING && voting.VOTING.url}')` }}
              />

              <ul className="content-panel-voting__buttons">
                {BUTTONS.map((button) => {
                  const { id } = button;
                  return (
                    <li key={id} className="content-panel-voting__button">
                      <Button width={80} height={80} {...button} />
                    </li>
                  )
                })}

              </ul>
            </header>

            <ul className="content-panel-voting__actions">
              {voting && voting.votingHistory.map((history) => {
                const { text, icon } = addedByVoting(history.value);

                return (
                  <li className="content-panel-voting__action" key={history.id}>
                    <span className="content-panel-voting__time">22:35</span>
                    Изображение с ID: <span className="content-panel-voting__id">{history.image_id}</span> {text}
                    <span className="content-panel-voting__icon">
                      {icon}
                    </span>
                  </li>
                )
              })}
            </ul>
          </React.Fragment>
        )
      }
    </div>
  )
}


const mapStateToProps = ({ voting }: IStore) => ({ voting });

export default connect(mapStateToProps, { getVotingRequest, getVotingHistory })(ContentPanelVoting)
