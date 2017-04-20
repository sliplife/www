import { applyMiddleware, createStore, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import reducers from 'reducers';

const configureStore = (preloadedState) => {

  const reduxRouterMiddleware = routerMiddleware(browserHistory);
  const store = createStore(
    reducers,
    preloadedState,
    compose(
      applyMiddleware(
        reduxThunk, reduxRouterMiddleware, reduxPromise
      )
    )
  );
  return store;
};

export default configureStore;
