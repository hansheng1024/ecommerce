// if we want to remove the imported redux-logger in store.js,
// and write our own middleware

// chained current functions
export const loggerMiddleware = (store) => (next) => (action) => {
    // not for me, pass it on
    if (!action.type) {
      return next(action);
    }
  
    // first half of logger: action and previous state
    console.log('type: ', action.type);
    console.log('payload: ', action.payload);
    console.log('currentState: ', store.getState());

    // pass the action along and wait for update
    next(action);

    // the new state!
    console.log('next state: ', store.getState());
  };