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

const incrementAction = () => ({ type: INCREMENT });

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

const subscriberSelector = () =>
  console.log("--Subcriber---", store.getState());

store.subscribe(subscriberSelector);

// store.dispatch(addAmountAction(7));
// store.dispatch(incrementAction);
// store.dispatch(incrementAction);

//Another flavour of writing action creators

const actions = bindActionCreators(
  { incrementAction, addAmountAction },
  store.dispatch
);

actions.addAmountAction(7);
actions.incrementAction();
actions.incrementAction();
