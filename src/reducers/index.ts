import { combineReducers } from 'redux';
import { data } from './data';
import { management } from './management';

export const reducers = combineReducers({ data, management });