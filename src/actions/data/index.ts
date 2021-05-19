import { createAction } from "redux-actions";

// Data
export const getBreedsRequest = createAction('GET_BREEDS_REQUEST');
export const getGalleryRequest = createAction('GET_GALLERY_REQUEST');

export const getDarkTheme = createAction('GET_DARK_THEME');
export const setDarkTheme = createAction('SET_DARK_THEME');