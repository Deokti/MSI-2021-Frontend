import { createAction } from 'redux-actions';

// Data
export const getVotingRequest = createAction('GET_VOTING_REQUEST');
export const getBreedsRequest = createAction('GET_BREEDS_REQUEST');
export const getGalleryRequest = createAction('GET_GALLERY_REQUEST');
export const setDarkTheme = createAction('SET_DARK_THEME');

// Management
export const setActiveControl = createAction('GET_CONTROLS_ITEMS');
