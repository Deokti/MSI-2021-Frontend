import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { API_URL } from '../config/API_URL';
import { axios } from '../config/axios';
import { IVote } from '../interfaces/response';

import { getVotesRequest } from '../actions/votes';
import { IStore } from '../interfaces/store';
import { IVotes } from '../interfaces/reducers';
import { LoadingSpinner } from '../components/LoadingSpinner';
import Navigation from '../components/Navigation';

interface LikePageProps {
  votes: IVotes
  getVotesRequest: () => any
}

function LikesPage({ votes, getVotesRequest }: LikePageProps): React.ReactElement<LikePageProps> {
  useEffect(() => votes.like === null ? getVotesRequest() : null, [getVotesRequest, votes.like]);



  return votes.loading
    ? <LoadingSpinner />
    : (
      <div className="content-panel-breeds content-panel-background">
        <Navigation />
      </div>
    )
}

const mapStateToProps = ({ votes }: IStore) => ({ votes })

export default connect(mapStateToProps, { getVotesRequest })(LikesPage);
