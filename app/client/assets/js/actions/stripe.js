import Promise from 'bluebird';
import { createAction } from 'redux-actions';
import { api } from 'actions';
import ReactGA from 'react-ga';

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

    ReactGA.event({
      category: 'Stripe',
      action: 'Create Charge',
      label: 'Onsite'
    });
    const state = getState();
    dispatch(requestHandler());
    return dispatch(api.connect(state.api.domain))
      .then((client) => client.Stripe.createCharge({ body }))
      .then((response) => {

        ReactGA.event({
          category: 'Stripe',
          action: 'Create Charge Success',
          label: 'Onsite',
          value: (response.obj.charge.amount / 100) || 0
        });
        return dispatch(createChargeHandler(response.obj));
      })
      .catch((response) => {

        ReactGA.event({
          category: 'Stripe',
          action: 'Create Charge Fail',
          label: `Onsite: ${response.obj.message}`
        });
        dispatch(errorHandler(response.obj));
        return Promise.reject(response.obj);
      });
  };
};
export const createToken = (body) => {

  return (dispatch, getState) => {

    ReactGA.event({
      category: 'Stripe',
      action: 'Create Token',
      label: 'Onsite'
    });
    dispatch(requestHandler());

    return new Promise((resolve, reject) => {

      Stripe.card.createToken(body, (status, response) => {

        if (response.error) {
          ReactGA.event({
            category: 'Stripe',
            action: 'Create Token Fail',
            label: `Onsite: ${response.obj.message}`
          });
          dispatch(errorHandler(response.error));
          return reject(new Error(response.error.message));
        }

        ReactGA.event({
          category: 'Stripe',
          action: 'Create Token Success',
          label: 'Onsite'
        });
        dispatch(createTokenHandler(response));
        return resolve(response);
      });
    });
  };
};
