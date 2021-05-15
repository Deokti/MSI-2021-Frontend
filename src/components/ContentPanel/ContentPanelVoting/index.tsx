import React, { ReactElement, useEffect, useState } from 'react';
import Button from '../../Button';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiSmile } from 'react-icons/fi';
import { CgSmileSad } from 'react-icons/cg';
import { getVotingRequest } from '../../../actions';
import { connect } from 'react-redux';
import './style.scss';
import { IStore } from '../../../interfaces/store';
import { IVoting } from '../../../interfaces/reducers';
import { BeatLoader } from 'react-spinners';

// https://api.thedogapi.com/v1/images/search --> рандомные картинки с изображением
// https://api.thedogapi.com/v1/votes --> история голосования

const BUTTONS = [
  {
    id: 0,
    children: <FiSmile size={35} color="#fff" />,
    backgroundColor: '#97EAB9',
    borderRadius: "20px 0 0 20px"
  },
  {
    id: 1,
    children: <AiOutlineHeart size={35} color="#fff" />,
    backgroundColor: '#FF868E',
    borderRadius: "0 0 0 0"
  },
  {
    id: 2,
    children: <CgSmileSad size={35} color="#fff" />,
    backgroundColor: '#FFD280',
    borderRadius: "0 20px 20px 0"
  }
];

interface ContentPanelVotingProps {
  getVotingRequest: () => any
  voting: IVoting
}

function ContentPanelVoting({ getVotingRequest, voting }: ContentPanelVotingProps): ReactElement<ContentPanelVotingProps> {
  useEffect(() => getVotingRequest(), [getVotingRequest]);


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
              <li className="content-panel-voting__action">
                <span className="content-panel-voting__time">22:35</span>
                Image ID: <span className="content-panel-voting__id">fQSunHvl8</span> was added to Favourites
                <span className="content-panel-voting__icon">
                  <AiOutlineHeart size={20} color="#FF868E" />
                </span>
              </li>
            </ul>
          </React.Fragment>
        )
      }
    </div>
  )
}

const mapStateToProps = ({ voting }: IStore) => ({ voting });

export default connect(mapStateToProps, { getVotingRequest })(ContentPanelVoting)