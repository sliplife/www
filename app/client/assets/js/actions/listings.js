import { createAction } from 'redux-actions';
import { api } from 'actions';

const browseHandler = createAction('LISTINGS_BROWSE');
const createHandler = createAction('LISTINGS_CREATE');
const destroyHandler = createAction('LISTINGS_DELETE');
const errorHandler = createAction('LISTINGS_ERROR');
const readHandler = createAction('LISTINGS_READ');
const requestHandler = createAction('LISTINGS_REQUEST');
const resetHandler = createAction('LISTINGS_RESET');
const searchHandler = createAction('LISTINGS_SEARCH');
const updateHandler = createAction('LISTINGS_UPDATE');

export const reset = () => {

  return (dispatch) => dispatch(resetHandler());
};
export const create = (body) => {

  return (dispatch, getState) => {

    const state = getState();
    dispatch(requestHandler());
    return dispatch(api.connect(state.api.domain))
      .then((client) => client.Listings.post({ body }))
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
        return client.Listings.put({ id, body });
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
      .then((client) => client.Listings.browse(params))
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
      .then((client) => client.Listings.browse(params))
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
      .then((client) => client.Listings.get({ id, ...options }))
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
      .then((client) => client.Listings.delete({ id }))
      .then((response) => dispatch(destroyHandler(response.obj)))
      .catch((response) => {

        dispatch(errorHandler(response.obj));
        return Promise.reject(response.obj);
      });
  };
};
