// The below are the main APIs of Redux, but on a total we have 9 of them.
import {
  createStore,
  compose,
  combineReducers,
  applyMiddleware,
  bindActionCreators
} from "redux";

const initialState = {
  users: [
    { id: 1, name: "Steve" },
    { id: 2, name: "Eric" }
  ],
  tasks: [
    { title: "File the TPS reports" },
    { title: "Order more energy drinks" }
  ]
};

const ADD_USER = "ADD_USER";
const ADD_TASK = "ADD_TASK";

const addUserAction = (user) => ({ type: ADD_USER, payload: user });
const addTaskAction = (task) => ({ type: ADD_TASK, payload: task });

const userReducer = (state = initialState.users, action) => {
  if (action.type === ADD_USER) {
    return [...state, action.payload];
  }
  return state;
};

const taskReducer = (state = initialState.tasks, action) => {
  if (action.type === ADD_TASK) {
    return [...state, action.payload];
  }
  return state;
};

const reducer = combineReducers({ users: userReducer, tasks: taskReducer });

const store = createStore(reducer);

console.log(store.getState());
