import { combineReducers } from 'redux';
import { data } from './data';
import { management } from './management';
import { voting } from './voting';

export const reducers = combineReducers({ data, management, voting });