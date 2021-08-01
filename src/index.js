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

const incrementAction = { type: INCREMENT };

const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { ...state, value: state.value + 1 };
  }
  return state;
};

const store = createStore(reducer);
store.dispatch(incrementAction);

console.log(store.getState());
