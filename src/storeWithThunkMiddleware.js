import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {reducer as myReducer, toDoAction, toDoActionCreator} from './todoExemple'

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const store = createStore(
  myReducer,
  applyMiddleware(thunk, logger)
);

store.dispatch(toDoAction)
// Meet thunks.
// A thunk in this context is a function that can be dispatched to perform async
// activity and can dispatch actions and read state.
// This is an action creator that returns a thunk:
export function iWantToDispatchAnActionWithAPromise(params) {
  // We can invert control here by returning a function - the "thunk".
  // When this function is passed to `dispatch`, the thunk middleware will intercept it,
  // and call it with `dispatch` and `getState` as arguments.
  // This gives the thunk function the ability to run some logic, and still interact with the store.
  return function (dispatch) {
    return Promise.resolve(params).then(
      params => dispatch(toDoActionCreator({ ...params, isLate: true}))
    )
  };
}

// Thunk middleware lets me dispatch thunk async actions
// as if they were actions!

store.dispatch(
  iWantToDispatchAnActionWithAPromise({text: `Tu n'y couperas pas tu vas faire la review des apis !`})
);

export default () => {
  return store
}
