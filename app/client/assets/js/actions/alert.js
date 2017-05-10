import { createAction } from 'redux-actions';
import biu from 'biu.js';


const alertHandler = createAction('ALERT');

export const error = (exception, selector) => {

  return (dispatch) => {

    let message = exception;
    if (exception instanceof Object) {
      message = exception.message;
    }
    const el = (!selector) ? document.body : document.querySelector(selector);
    biu(message, {
      el,
      type: 'danger', pop: false, autoHide: false, hideOnClick: true
    });
    return dispatch(alertHandler(exception));
  };
};

export const success = (message, selector) => {

  return (dispatch) => {

    const el = (!selector) ? document.body : document.querySelector(selector);
    biu(message, {
      el,
      type: 'success', pop: false, autoHide: true, hideOnClick: true
    });
    return dispatch(alertHandler({ message }));
  };
};
