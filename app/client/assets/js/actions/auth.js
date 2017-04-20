import { createAction } from 'redux-actions';
import jwtDecode from 'jwt-decode';
import { api } from 'actions';
import Cookies from 'js-cookie';

const requestHandler = createAction('AUTH_REQUEST');
const logoutHandler = createAction('AUTH_LOGOUT');
const signupHandler = createAction('AUTH_SIGNUP');
const updatePasswordHandler = createAction('AUTH_UPDATE_PASSWORD');
const errorHandler = createAction('AUTH_ERROR', (error) => {

  localStorage.removeItem('token');
  Cookies.remove('token');
  return { error };
});
const sendRecoveryHandler = createAction('AUTH_SEND_RECOVERY');
const loginHandler = createAction('AUTH_LOGIN', (response) => {

  const { jwt } = response;
  localStorage.setItem('token', jwt.token);
  Cookies.set('token', jwt.token, { expires: 7, path: '/' });
  const user = jwtDecode(jwt.token);
  return { jwt, ...user };
});

export const signup = (body) => {

  return (dispatch, getState) => {

    const state = getState();
    dispatch(requestHandler());
    return dispatch(api.connect(state.api.domain))
      .then((client) => client.Auth.signup({ body }))
      .then((response) => dispatch(signupHandler()))
      .catch((response) => {

        console.log(response);
        dispatch(errorHandler(response.obj));
        return Promise.reject(response.obj);
      });
  };
};
export const getAuthenticationToken = () => localStorage.getItem('token');
export const isAuthenticated = () => (getAuthenticationToken() !== null);
export const logout = () => {

  return (dispatch) => {

    localStorage.removeItem('token');
    Cookies.remove('token');
    dispatch(logoutHandler());
  };
};
export const login = (body = {}) => {

  return (dispatch, getState) => {

    const state = getState();
    dispatch(requestHandler());
    return dispatch(api.connect(state.api.domain))
      .then((client) => {

        if (isAuthenticated()) {
          return ({ jwt: { token: getAuthenticationToken() } });
        }
        if (body.jwt) {
          return body;
        }
        return client.Auth.post({ body });
      })
      .then((response) => dispatch(loginHandler(response.obj || response)))
      .catch((response) => {

        dispatch(errorHandler(response.obj));
        return Promise.reject(response.obj);
      });
  };
};
export const sendRecovery = (body) => {

  return (dispatch, getState) => {

    const state = getState();
    dispatch(requestHandler());
    return dispatch(api.connect(state.api.domain))
      .then((client) => client.Tokens.post({ body }))
      .then((response) => dispatch(sendRecoveryHandler(response.obj)))
      .catch((response) => {

        dispatch(errorHandler(response.obj));
        return Promise.reject(response.obj);
      });
  };
};
export const updatePassword = (body) => {

  return (dispatch, getState) => {

    const state = getState();
    dispatch(requestHandler());
    return dispatch(api.connect(state.api.domain))
      .then((client) => client.Auth.put({ body }))
      .then((response) => {

        dispatch(updatePasswordHandler(response.obj));
        dispatch(loginHandler(response.obj));
      })
      .catch((response) => {

        dispatch(errorHandler(response.obj));
        return Promise.reject(response.obj);
      });
  };
};
