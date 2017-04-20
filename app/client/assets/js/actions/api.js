import { createAction } from 'redux-actions';
const Swagger = require('swagger-client');

const connectHandler = createAction('API_CONNECT');
const switchContextHandler = createAction('API_SWITCH_CONTEXT');

export const connect = (domain = false) => {

  return (dispatch) => {

    let url = '/api/docs';

    if (domain) {
      url = `${document.location.protocol}//${domain}`;
      if (document.location.port !== 80) {
        url += `:${document.location.port}`;
      }
      url += '/api/docs';
    }

    dispatch(connectHandler());
    return new Swagger({
      url,
      usePromise: true,
      authorizations : {
        jwt: new Swagger.ApiKeyAuthorization('Authorization', localStorage.getItem('token'), 'header')
      }
    });
  };
};

export const switchContext = (context = {}) => {

  return (dispatch) => {

    return dispatch(connect())
      .then((api) => dispatch(switchContextHandler(api.info)));
  };
};
