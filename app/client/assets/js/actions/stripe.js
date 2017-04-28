import Promise from 'bluebird';
import { createAction } from 'redux-actions';
import { api } from 'actions';

const createChargeHandler = createAction('STRIPE_CREATE_CHARGE');
const createTokenHandler = createAction('STRIPE_CREATE_TOKEN');
const errorHandler = createAction('STRIPE_ERROR');
const requestHandler = createAction('STRIPE_REQUEST');
const resetHandler = createAction('STRIPE_RESET');

export const reset = () => {

  return (dispatch) => dispatch(resetHandler());
};
export const createCharge = (body) => {

  return (dispatch, getState) => {

    const state = getState();
    dispatch(requestHandler());
    return dispatch(api.connect(state.api.domain))
      .then((client) => client.Stripe.createCharge({ body }))
      .then((response) => dispatch(createChargeHandler(response.obj)))
      .catch((response) => {

        dispatch(errorHandler(response.obj));
        return Promise.reject(response.obj);
      });
  };
};
export const createToken = (body) => {

  return (dispatch, getState) => {

    dispatch(requestHandler());

    return new Promise((resolve, reject) => {

      Stripe.card.createToken(body, (status, response) => {

        if (response.error) {
          dispatch(errorHandler(response.error));
          return reject(new Error(response.error.message));
        }

        dispatch(createTokenHandler(response));
        return resolve(response);
      });
    });
  };
};
