import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getVotesRequest } from '../actions/votes';
import { IStore } from '../interfaces/store';
import { IVotes } from '../interfaces/reducers';
import { LoadingSpinner } from '../components/LoadingSpinner';
import Navigation from '../components/Navigation';
import { BreedsList } from '../components/BreedsList';

interface DislikesPageProps {
  votes: IVotes
  getVotesRequest: () => any
}

function DislikesPage({ votes, getVotesRequest }: DislikesPageProps): React.ReactElement<DislikesPageProps> {
  useEffect(() => votes.dislike === null ? getVotesRequest() : null, [getVotesRequest, votes.dislike]);

  return (
    <div className="content-panel-breeds content-panel-background">
      <Navigation />

      {votes.loading
        ? <LoadingSpinner />
        : <BreedsList dogsList={votes.dislike} apperance="default" />
      }
    </div>
  )
}

const mapStateToProps = ({ votes }: IStore) => ({ votes })

export default connect(mapStateToProps, { getVotesRequest })(DislikesPage);
