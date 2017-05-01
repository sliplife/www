import { createAction } from 'redux-actions';
import { api } from 'actions';
import ReactGA from 'react-ga';

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

    ReactGA.event({
      category: 'Uploads',
      action: 'Create',
      label: 'Onsite'
    });
    const state = getState();
    dispatch(requestHandler());
    return dispatch(api.connect(state.api.domain))
      .then((client) => client.Uploads.post({ body }))
      .then((response) => {

        ReactGA.event({
          category: 'Uploads',
          action: 'Create Success',
          label: 'Onsite'
        });
        return dispatch(createHandler(response.obj));
      })
      .catch((response) => {

        ReactGA.event({
          category: 'Uploads',
          action: 'Create Fail',
          label: `Onsite: ${response.obj.message}`
        });
        dispatch(errorHandler(response.obj));
        return Promise.reject(response.obj);
      });
  };
};
export const update = (body) => {

  return (dispatch, getState) => {

    ReactGA.event({
      category: 'Uploads',
      action: 'Update',
      label: 'Onsite'
    });
    const state = getState();
    dispatch(requestHandler());
    return dispatch(api.connect(state.api.domain))
      .then((client) => {

        const { id } = body;
        return client.Uploads.put({ id, body });
      })
      .then((response) => {

        ReactGA.event({
          category: 'Uploads',
          action: 'Update Success',
          label: 'Onsite'
        });
        return dispatch(updateHandler(response.obj));
      })
      .catch((response) => {

        dispatch(errorHandler(response.obj));
        return Promise.reject(response.obj);
      });
  };
};
export const browse = (params) => {

  return (dispatch, getState) => {

    ReactGA.event({
      category: 'Uploads',
      action: 'Browse',
      label: 'Onsite'
    });
    const state = getState();
    dispatch(requestHandler());
    return dispatch(api.connect(state.api.domain))
      .then((client) => client.Uploads.browse(params))
      .then((response) => {

        ReactGA.event({
          category: 'Uploads',
          action: 'Browse Success',
          label: 'Onsite'
        });
        return dispatch(browseHandler(response.obj));
      })
      .catch((response) => {

        ReactGA.event({
          category: 'Uploads',
          action: 'Browse Fail',
          label: `Onsite: ${response.obj.message}`
        });
        dispatch(errorHandler(response.obj));
        return Promise.reject(response.obj);
      });
  };
};
export const search = (params) => {

  return (dispatch, getState) => {

    ReactGA.event({
      category: 'Uploads',
      action: 'Search',
      label: 'Onsite'
    });
    const state = getState();
    dispatch(requestHandler());
    return dispatch(api.connect(state.api.domain))
      .then((client) => client.Uploads.browse(params))
      .then((response) => {

        ReactGA.event({
          category: 'Uploads',
          action: 'Search Success',
          label: 'Onsite'
        });
        return dispatch(searchHandler(response.obj));
      })
      .catch((response) => {

        ReactGA.event({
          category: 'Uploads',
          action: 'Search Fail',
          label: `Onsite: ${response.obj.message}`
        });
        dispatch(errorHandler(response.obj));
        return Promise.reject(response.obj);
      });
  };
};
export const read = (id, options = {}) => {

  return (dispatch, getState) => {

    ReactGA.event({
      category: 'Uploads',
      action: 'Read',
      label: 'Onsite'
    });
    const state = getState();
    dispatch(requestHandler());
    return dispatch(api.connect(state.api.domain))
      .then((client) => client.Uploads.get({ id, ...options }))
      .then((response) => {

        ReactGA.event({
          category: 'Uploads',
          action: 'Read Success',
          label: 'Onsite'
        });
        return dispatch(readHandler(response.obj));
      })
      .catch((response) => {

        ReactGA.event({
          category: 'Uploads',
          action: 'Read Fail',
          label: `Onsite: ${response.obj.message}`
        });
        dispatch(errorHandler(response.obj));
        return Promise.reject(response.obj);
      });
  };
};
export const destroy = (id) => {

  return (dispatch, getState) => {

    ReactGA.event({
      category: 'Uploads',
      action: 'Delete',
      label: 'Onsite'
    });
    const state = getState();
    dispatch(requestHandler());
    return dispatch(api.connect(state.api.domain))
      .then((client) => client.Uploads.delete({ id }))
      .then((response) => {

        ReactGA.event({
          category: 'Uploads',
          action: 'Delete Success',
          label: 'Onsite'
        });
        return dispatch(destroyHandler(response.obj));
      })
      .catch((response) => {

        ReactGA.event({
          category: 'Uploads',
          action: 'Delete Fail',
          label: `Onsite: ${response.obj.message}`
        });
        dispatch(errorHandler(response.obj));
        return Promise.reject(response.obj);
      });
  };
};
