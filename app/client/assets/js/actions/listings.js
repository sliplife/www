import { createAction } from 'redux-actions';
import { api } from 'actions';
import ReactGA from 'react-ga';

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

    ReactGA.event({
      category: 'Listings',
      action: 'Create',
      label: 'Onsite'
    });
    const state = getState();
    dispatch(requestHandler());
    return dispatch(api.connect(state.api.domain))
      .then((client) => client.Listings.post({ body }))
      .then((response) => {

        ReactGA.event({
          category: 'Listings',
          action: 'Create Success',
          label: 'Onsite'
        });
        return dispatch(createHandler(response.obj));
      })
      .catch((response) => {

        ReactGA.event({
          category: 'Listings',
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
      category: 'Listings',
      action: 'Update',
      label: 'Onsite'
    });
    const state = getState();
    dispatch(requestHandler());
    return dispatch(api.connect(state.api.domain))
      .then((client) => {

        const { id } = body;
        return client.Listings.put({ id, body });
      })
      .then((response) => {

        ReactGA.event({
          category: 'Listings',
          action: 'Update Success',
          label: 'Onsite'
        });
        return dispatch(updateHandler(response.obj));
      })
      .catch((response) => {

        ReactGA.event({
          category: 'Listings',
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
      category: 'Listings',
      action: 'Browse',
      label: 'Onsite'
    });
    const state = getState();
    dispatch(requestHandler());
    return dispatch(api.connect(state.api.domain))
      .then((client) => client.Listings.browse(params))
      .then((response) => {

        ReactGA.event({
          category: 'Listings',
          action: 'Browse Success',
          label: 'Onsite'
        });
        return dispatch(browseHandler(response.obj));
      })
      .catch((response) => {

        ReactGA.event({
          category: 'Listings',
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
      category: 'Listings',
      action: 'Search',
      label: 'Onsite'
    });
    const state = getState();
    dispatch(requestHandler());
    return dispatch(api.connect(state.api.domain))
      .then((client) => client.Listings.browse(params))
      .then((response) => {

        ReactGA.event({
          category: 'Listings',
          action: 'Search Success',
          label: 'Onsite'
        });
        return dispatch(searchHandler(response.obj));
      })
      .catch((response) => {

        ReactGA.event({
          category: 'Listings',
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
      category: 'Listings',
      action: 'Read',
      label: 'Onsite'
    });
    const state = getState();
    dispatch(requestHandler());
    return dispatch(api.connect(state.api.domain))
      .then((client) => client.Listings.get({ id, ...options }))
      .then((response) => {

        ReactGA.event({
          category: 'Listings',
          action: 'Read Success',
          label: 'Onsite'
        });
        return dispatch(readHandler(response.obj));
      })
      .catch((response) => {

        ReactGA.event({
          category: 'Listings',
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
      category: 'Listings',
      action: 'Delete',
      label: 'Onsite'
    });
    const state = getState();
    dispatch(requestHandler());
    return dispatch(api.connect(state.api.domain))
      .then((client) => client.Listings.delete({ id }))
      .then((response) => {

        ReactGA.event({
          category: 'Listings',
          action: 'Delete Success',
          label: 'Onsite'
        });
        return dispatch(destroyHandler(response.obj));
      })
      .catch((response) => {

        ReactGA.event({
          category: 'Listings',
          action: 'Delete Fail',
          label: `Onsite: ${response.obj.message}`
        });
        dispatch(errorHandler(response.obj));
        return Promise.reject(response.obj);
      });
  };
};
