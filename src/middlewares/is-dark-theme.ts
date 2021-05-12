import { MiddlewareAPI, Dispatch, Action } from 'redux';
import { getDarkTheme, setDarkTheme } from '../actions';
import { getThemeLocalStorage, setThemeLocalStorage } from '../utils/theme-local-storage';

export const isDarkTheme = (store: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
  if (action.type === getDarkTheme.toString()) {
    const darkTheme = getThemeLocalStorage();

    return darkTheme === false
      ? setThemeLocalStorage(darkTheme)
      : store.dispatch(setDarkTheme(darkTheme))
  }

  return next(action);
}
