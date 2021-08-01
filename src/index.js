// The below are the main APIs of Redux, but on a total we have 9 of them.
import {
  createStore,
  compose,
  combineReducers,
  applyMiddleware,
  bindActionCreators
} from "redux";

const initialState = { value: 0 };

// const INCREMENT = "counter/increment";
const INCREMENT = "increment";
const ADDAMOUNT = "addAmount";

const incrementAction = { type: INCREMENT };

const addAmountAction = (amount) => ({ type: ADDAMOUNT, payload: amount });

const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { ...state, value: state.value + 1 };
  }
  if (action.type === ADDAMOUNT) {
    return { ...state, value: action.payload };
  }
  return state;
};

const store = createStore(reducer);
store.dispatch(incrementAction);
store.dispatch(addAmountAction(7));

console.log(store.getState());
