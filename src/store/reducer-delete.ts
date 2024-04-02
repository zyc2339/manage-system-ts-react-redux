//this file can be deleted after encapsulation, no longer needed.
//original reducer file

//prepare data
import handleNum from "./NumStatus/index";

const defaultState = {
  // num: 20,
  ...handleNum.state, //destructure systax
};
//update state
let reducer = (state = defaultState, action: { type: string; val: number }) => {
  //dispatch() will trigger this function
  console.log("reducer called");
  let newState = JSON.parse(JSON.stringify(state)); //create a deep copy of an object
  switch (action.type) {
    case handleNum.add1:
      // newState.num++;
      handleNum.actions[handleNum.add1](newState, action);
      break;
    case handleNum.add2:
      //action.val from dispatch
      // newState.num = newState.num + action.val;
      handleNum.actions[handleNum.add2](newState, action);

      break;
    default:
      break;
  }
  return newState;
};
export default reducer;
