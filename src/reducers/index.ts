import { combineReducers } from 'redux';
import { data } from './data';
import { management } from './management';
import { voting } from './voting';
import { breeds } from './breeds';
import { gallery } from './gallery';

export const reducers = combineReducers({ data, management, voting, breeds, gallery });