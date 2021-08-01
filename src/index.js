// The below are the main APIs of Redux, but on a total we have 9 of them.
import {
  createStore,
  compose,
  combineReducers,
  applyMiddleware,
  bindActionCreators
} from "redux";

const initialState = { value: 0 };

const INCREMENT = "increment";

const incrementAction = { type: INCREMENT };

const reducer = (state = initialState, actions) => {
  return state;
};

const store = createStore(reducer);

console.log(store);

/*
Store have the below methods.
dispatch
getState
replaceReducer
subscribe
Symbol
*/

//replace reducer takes the current reducer and swaps it with new reducer
//dispatch will dispatch and action to a reducer like a notifier to the store
//getState will get the current state inside a reducer
//subscribe will subscribe to the values of a reducer.
