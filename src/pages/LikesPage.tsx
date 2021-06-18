import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVotesRequest } from '../actions/votes';
import { IStore } from '../interfaces/store';
import { IVotes } from '../interfaces/reducers';
import { LoadingSpinner } from '../components/LoadingSpinner';
import Navigation from '../components/Navigation';
import { BreedsList } from '../components/BreedsList';

interface LikePageProps {
  votes: IVotes
  getVotesRequest: () => any
}

function LikesPage({ votes, getVotesRequest }: LikePageProps): React.ReactElement<LikePageProps> {
  useEffect(() => votes.like === null ? getVotesRequest() : null, [getVotesRequest, votes.like]);

  return (
    <div className="content-panel-breeds content-panel-background">
      <Navigation />

      {votes.loading
        ? <LoadingSpinner />
        : <BreedsList dogsList={votes.like} apperance="default" />
      }
    </div>
  )
}

const mapStateToProps = ({ votes }: IStore) => ({ votes })

export default connect(mapStateToProps, { getVotesRequest })(LikesPage);
