import React, { ReactElement, useCallback, useEffect } from 'react';
import Button from '../../Button';
import { connect } from 'react-redux';
import { IStore } from '../../../interfaces/store';
import { IVoting } from '../../../interfaces/reducers';

import { AiOutlineHeart } from "react-icons/ai";
import { CgSmileSad } from "react-icons/cg";
import { FiSmile } from "react-icons/fi";
import { addedByVoting } from '../../../utils/added-by-voting';
import Navigation from '../../Navigation';
import { getVotingRequest, getVotingHistory, sendVotingRequest } from '../../../actions/voting';
import { LoadingSpinner } from '../../LoadingSpinner';
import './style.scss';
import '../../../assets/styles/scroll.scss';

interface ContentPanelVotingProps {
  getVotingRequest: () => any
  getVotingHistory: () => any
  sendVotingRequest: ({ image_id, vote }: { image_id: string, vote: number }) => any
  voting: IVoting
}

function ContentPanelVoting({ getVotingRequest, getVotingHistory, sendVotingRequest, voting }: ContentPanelVotingProps): ReactElement<ContentPanelVotingProps> {
  const onLoad = useCallback(() => {
    return voting.data === null
      ? (getVotingRequest(), getVotingHistory())
      : null
  }, [getVotingHistory, getVotingRequest, voting.data])

  useEffect(onLoad, [onLoad]);

  const vote = (vote: number) => ({ image_id: voting.data?.id || '', vote });

  const BUTTONS = [
    {
      id: 'onLikes',
      children: <FiSmile size={35} color="#fff" />,
      onClick: () => sendVotingRequest(vote(1)),
      backgroundColor: '#97EAB9',
      borderRadius: "20px 0 0 20px"
    },
    {
      id: 'onFavourites',
      children: <AiOutlineHeart size={35} color="#fff" />,
      backgroundColor: '#FF868E',
      borderRadius: "0 0 0 0"
    },
    {
      id: 'onDislikes',
      children: <CgSmileSad size={35} color="#fff" />,
      onClick: () => sendVotingRequest(vote(0)),
      backgroundColor: '#FFD280',
      borderRadius: "0 20px 20px 0"
    }
  ];

  return (
    <div className="content-panel-voting content-panel-background">
      <Navigation />

      {voting.loading
        ? <LoadingSpinner />
        : (
          <React.Fragment>
            <header className="content-panel-voting__header">
              <div className="content-panel-voting__image"
                style={{ backgroundImage: `url('${voting.data && voting.data.url}')` }}
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

            <ul className="content-panel-voting__actions scroll">
              {voting && voting.history.map((history) => {
                const { text, icon } = addedByVoting(history.value);

                return (
                  <li className="content-panel-voting__action" key={history.id}>
                    <span className="content-panel-voting__time">
                      {new Date(history.created_at).toLocaleTimeString()}
                    </span>
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

export default connect(mapStateToProps, { getVotingRequest, getVotingHistory, sendVotingRequest })(ContentPanelVoting)
