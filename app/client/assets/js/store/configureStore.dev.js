import { applyMiddleware, createStore, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import createReduxLogger from 'redux-logger';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import reducers from 'reducers';
import { DevTools } from 'containers';
import Perf from 'react-addons-perf';
window.Perf = Perf;

const configureStore = (preloadedState) => {

  const reduxRouterMiddleware = routerMiddleware(browserHistory);
  const reduxLogger = createReduxLogger({
    level: 'info',
    collapsed: false,
    diff: true
  });
  const store = createStore(
    reducers,
    preloadedState,
    compose(
      applyMiddleware(
        reduxThunk, reduxRouterMiddleware, reduxPromise, reduxLogger
      ),
      DevTools.instrument()
    )
  );
  return store;
};

export default configureStore;
