import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducers } from './reducers';

import { isDarkTheme } from './middlewares/is-dark-theme';

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});

const store = createStore(reducers, compose(
  applyMiddleware(isDarkTheme),
  composeEnhancers()
));

export { store };