import { createAction } from 'redux-actions';
import { api } from 'actions';

const browseHandler = createAction('TOKENS_BROWSE');
const createHandler = createAction('TOKENS_CREATE');
const destroyHandler = createAction('TOKENS_DELETE');
const errorHandler = createAction('TOKENS_ERROR');
const readHandler = createAction('TOKENS_READ');
const requestHandler = createAction('TOKENS_REQUEST');
const resetHandler = createAction('TOKENS_RESET');
const searchHandler = createAction('TOKENS_SEARCH');
const updateHandler = createAction('TOKENS_UPDATE');

export const reset = () => {

  return (dispatch) => dispatch(resetHandler());
};
export const create = (body) => {

  return (dispatch, getState) => {

    const state = getState();
    dispatch(requestHandler());
    return dispatch(api.connect(state.api.domain))
      .then((client) => client.Tokens.post({ body }))
      .then((response) => dispatch(createHandler(response.obj)))
      .catch((response) => {

        dispatch(errorHandler(response.obj));
        return Promise.reject(response.obj);
      });
  };
};
export const update = (body) => {

  return (dispatch, getState) => {

    const state = getState();
    dispatch(requestHandler());
    return dispatch(api.connect(state.api.domain))
      .then((client) => {

        const { id } = body;
        return client.Tokens.put({ id, body });
      })
      .then((response) => dispatch(updateHandler(response.obj)))
      .catch((response) => {

        dispatch(errorHandler(response.obj));
        return Promise.reject(response.obj);
      });
  };
};
export const browse = (params) => {

  return (dispatch, getState) => {

    const state = getState();
    dispatch(requestHandler());
    return dispatch(api.connect(state.api.domain))
      .then((client) => client.Tokens.browse(params))
      .then((response) => dispatch(browseHandler(response.obj)))
      .catch((response) => {

        dispatch(errorHandler(response.obj));
        return Promise.reject(response.obj);
      });
  };
};
export const search = (params) => {

  return (dispatch, getState) => {

    const state = getState();
    dispatch(requestHandler());
    return dispatch(api.connect(state.api.domain))
      .then((client) => client.Tokens.browse(params))
      .then((response) => dispatch(searchHandler(response.obj)))
      .catch((response) => {

        dispatch(errorHandler(response.obj));
        return Promise.reject(response.obj);
      });
  };
};
export const read = (id, options = {}) => {

  return (dispatch, getState) => {

    const state = getState();
    dispatch(requestHandler());
    return dispatch(api.connect(state.api.domain))
      .then((client) => client.Tokens.get({ id, ...options }))
      .then((response) => dispatch(readHandler(response.obj)))
      .catch((response) => {

        dispatch(errorHandler(response.obj));
        return Promise.reject(response.obj);
      });
  };
};
export const destroy = (id) => {

  return (dispatch, getState) => {

    const state = getState();
    dispatch(requestHandler());
    return dispatch(api.connect(state.api.domain))
      .then((client) => client.Tokens.delete({ id }))
      .then((response) => dispatch(destroyHandler(response.obj)))
      .catch((response) => {

        dispatch(errorHandler(response.obj));
        return Promise.reject(response.obj);
      });
  };
};
