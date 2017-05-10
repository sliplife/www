import { createAction } from 'redux-actions';
import { api } from 'actions';
import ReactGA from 'react-ga';

const createHandler = createAction('SUBSCRIPTIONS_CREATE');
const errorHandler = createAction('SUBSCRIPTIONS_ERROR');
const requestHandler = createAction('SUBSCRIPTIONS_REQUEST');
const resetHandler = createAction('SUBSCRIPTIONS_RESET');

export const reset = () => {

  return (dispatch) => dispatch(resetHandler());
};
export const create = (body) => {

  return (dispatch, getState) => {

    ReactGA.event({
      category: 'Subscriptions',
      action: 'Create',
      label: 'Onsite'
    });
    const state = getState();
    dispatch(requestHandler());
    return dispatch(api.connect(state.api.domain))
      .then((client) => client.Subscriptions.post({ body }))
      .then((response) => {

        ReactGA.event({
          category: 'Subscriptions',
          action: 'Create Success',
          label: 'Onsite'
        });
        return dispatch(createHandler(response.obj));
      })
      .catch((response) => {

        ReactGA.event({
          category: 'Subscriptions',
          action: 'Create Fail',
          label: `Onsite: ${response.obj.message}`
        });
        dispatch(errorHandler(response.obj));
        return Promise.reject(response.obj);
      });
  };
};
