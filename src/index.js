// The below are the main APIs of Redux, but on a total we have 9 of them.
import {
  createStore,
  compose,
  combineReducers,
  applyMiddleware,
  bindActionCreators
} from "redux";

const makeLouder = (string) => string.toUpperCase();

const repeatThreeTimes = (string) => string.repeat(3);

const embolden = (stringVal) => stringVal.bold();

// //normal way of doing things
// const makeLouderRepeatThreeTimesEmboldenTheNormalWay = embolden(
//   repeatThreeTimes(makeLouder("hello"))
// );

// console.log(
//   "--makeLouderRepeatThreeTimesEmboldenTheNormalWay--",
//   makeLouderRepeatThreeTimesEmboldenTheNormalWay
// );

//using compose Redux API
const makeLouderRepeatThreeTimesEmboldenUsingComposeReduxWay = compose(
  makeLouder,
  repeatThreeTimes,
  embolden
);

console.log(
  "--makeLouderRepeatThreeTimesEmboldenUsingComposeReduxWay--",
  makeLouderRepeatThreeTimesEmboldenUsingComposeReduxWay("hello")
);
