export function checkHttpStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  return response.json().then((json) => {
    const error = new Error(json.message);
    error.data = json;
    throw error;
  });
}

export function parseJSON(response) {
  return response.json();
}

// Redirect path handler for react-router.
export function redirect(from, to) {
  return {
    path: from,
    onEnter: (nextState, replace) => {
      replace(to);
    }
  };
}
