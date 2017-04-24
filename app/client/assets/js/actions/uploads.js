import { createAction } from 'redux-actions';
import { api } from 'actions';

const browseHandler = createAction('UPLOADS_BROWSE');
const createHandler = createAction('UPLOADS_CREATE');
const destroyHandler = createAction('UPLOADS_DELETE');
const errorHandler = createAction('UPLOADS_ERROR');
const readHandler = createAction('UPLOADS_READ');
const requestHandler = createAction('UPLOADS_REQUEST');
const resetHandler = createAction('UPLOADS_RESET');
const searchHandler = createAction('UPLOADS_SEARCH');
const updateHandler = createAction('UPLOADS_UPDATE');

export const reset = () => {

  return (dispatch) => dispatch(resetHandler());
};
export const create = (body) => {

  return (dispatch, getState) => {

    const state = getState();
    dispatch(requestHandler());
    return dispatch(api.connect(state.api.domain))
      .then((client) => client.Uploads.post({ body }))
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
        return client.Uploads.put({ id, body });
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
      .then((client) => client.Uploads.browse(params))
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
      .then((client) => client.Uploads.browse(params))
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
      .then((client) => client.Uploads.get({ id, ...options }))
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
      .then((client) => client.Uploads.delete({ id }))
      .then((response) => dispatch(destroyHandler(response.obj)))
      .catch((response) => {

        dispatch(errorHandler(response.obj));
        return Promise.reject(response.obj);
      });
  };
};
