import { createAction } from 'redux-actions';

// Data
export const getBreedsRequest = createAction('GET_BREEDS_REQUEST');
export const getGalleryRequest = createAction('GET_GALLERY_REQUEST');

export const getDarkTheme = createAction('GET_DARK_THEME');
export const setDarkTheme = createAction('SET_DARK_THEME');

// Management
export const setActiveControl = createAction('GET_CONTROLS_ITEMS');

// Voting
export const getVotingRequest = createAction('GET_VOTING_REQUEST');
export const getVotingSucsess = createAction('GET_VOTING_SUCCSESS');
export const getVotingFailure = createAction('GET_VOTING_FAILURE');
export const getVotingHistory = createAction('GET_VOTING_HISTORY');
export const getVotingHistorySucsess = createAction('GET_VOTING_SUCSESS');
