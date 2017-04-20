import { createAction } from 'redux-actions';
import biu from 'biu.js';


const alertHandler = createAction('ALERT');

export const error = (exception) => {

  return (dispatch) => {

    let message = exception;
    if (exception instanceof Object) {
      message = exception.message;
    }
    biu(message, {
      el: document.querySelector('.twelve.wide.column') || document.body,
      type: 'danger', pop: false, autoHide: false, hideOnClick: true
    });
    return dispatch(alertHandler(exception));
  };
};

export const success = (message) => {

  return (dispatch) => {

    biu(message, {
      el: document.querySelector('.twelve.wide.column') || document.body,
      type: 'success', pop: false, autoHide: true, hideOnClick: true
    });
    return dispatch(alertHandler({ message }));
  };
};
