import { createAction } from 'redux-actions';
import { api } from 'actions';
import ReactGA from 'react-ga';

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

    ReactGA.event({
      category: 'Tokens',
      action: 'Create',
      label: 'Onsite'
    });
    const state = getState();
    dispatch(requestHandler());
    return dispatch(api.connect(state.api.domain))
      .then((client) => client.Tokens.post({ body }))
      .then((response) => {

        ReactGA.event({
          category: 'Tokens',
          action: 'Create Success',
          label: 'Onsite'
        });
        return dispatch(createHandler(response.obj));
      })
      .catch((response) => {

        ReactGA.event({
          category: 'Tokens',
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
      category: 'Tokens',
      action: 'Update',
      label: 'Onsite'
    });
    const state = getState();
    dispatch(requestHandler());
    return dispatch(api.connect(state.api.domain))
      .then((client) => {

        const { id } = body;
        return client.Tokens.put({ id, body });
      })
      .then((response) => {

        ReactGA.event({
          category: 'Tokens',
          action: 'Update Success',
          label: 'Onsite'
        });
        return dispatch(updateHandler(response.obj));
      })
      .catch((response) => {

        ReactGA.event({
          category: 'Tokens',
          action: 'Update Fail',
          label: `Onsite: ${response.obj.message}`
        });
        dispatch(errorHandler(response.obj));
        return Promise.reject(response.obj);
      });
  };
};
export const browse = (params) => {

  return (dispatch, getState) => {

    ReactGA.event({
      category: 'Tokens',
      action: 'Browse',
      label: 'Onsite'
    });
    const state = getState();
    dispatch(requestHandler());
    return dispatch(api.connect(state.api.domain))
      .then((client) => client.Tokens.browse(params))
      .then((response) => {

        ReactGA.event({
          category: 'Tokens',
          action: 'Browse Success',
          label: 'Onsite'
        });
        return dispatch(browseHandler(response.obj));
      })
      .catch((response) => {

        ReactGA.event({
          category: 'Tokens',
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
      category: 'Tokens',
      action: 'Search',
      label: 'Onsite'
    });
    const state = getState();
    dispatch(requestHandler());
    return dispatch(api.connect(state.api.domain))
      .then((client) => client.Tokens.browse(params))
      .then((response) => {

        ReactGA.event({
          category: 'Tokens',
          action: 'Search Success',
          label: 'Onsite'
        });
        return dispatch(searchHandler(response.obj));
      })
      .catch((response) => {

        ReactGA.event({
          category: 'Tokens',
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
      category: 'Tokens',
      action: 'Read',
      label: 'Onsite'
    });
    const state = getState();
    dispatch(requestHandler());
    return dispatch(api.connect(state.api.domain))
      .then((client) => client.Tokens.get({ id, ...options }))
      .then((response) => {

        ReactGA.event({
          category: 'Tokens',
          action: 'Read Success',
          label: 'Onsite'
        });
        return dispatch(readHandler(response.obj));
      })
      .catch((response) => {

        ReactGA.event({
          category: 'Tokens',
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
      category: 'Tokens',
      action: 'Delete',
      label: 'Onsite'
    });
    const state = getState();
    dispatch(requestHandler());
    return dispatch(api.connect(state.api.domain))
      .then((client) => client.Tokens.delete({ id }))
      .then((response) => {

        ReactGA.event({
          category: 'Tokens',
          action: 'Delete Success',
          label: 'Onsite'
        });
        return dispatch(destroyHandler(response.obj));
      })
      .catch((response) => {

        ReactGA.event({
          category: 'Tokens',
          action: 'Delete Fail',
          label: `Onsite: ${response.obj.message}`
        });
        dispatch(errorHandler(response.obj));
        return Promise.reject(response.obj);
      });
  };
};
