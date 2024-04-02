//prepare data
import handleNum from "./index";

const defaultState = {
  // num: 20,
  ...handleNum.state, //destructure systax
};
//update state
let reducer = (state = defaultState, action: { type: string; val: number }) => {
  //dispatch() will trigger this function
  console.log("reducer called");
  let newState = JSON.parse(JSON.stringify(state)); //create a deep copy of an object

  /*
switch (action.type) {
  case handleNum.add1:
  
    handleNum.actions[handleNum.add1](newState, action);
    break;

  case handleNum.add2:
  
    handleNum.actions[handleNum.add2](newState, action);
    break;
    
  default:
    break;
  }*/
  // [optimization]
  //use loop instead of switch, because use switch we need to update function in here use case
  //we can compare  action.type with actionNames, if they are matched, then we can call the function
  // handleNum.actions["function name"](newState, action)
  for (let key in handleNum.actionNames) {
    //@ts-ignore
    if (action.type === handleNum.actionNames[key]) {
      //@ts-ignore
      handleNum.actions[handleNum.actionNames[key]](newState, action);
      break;
    }
    //for doing this, New created function from index.ts will be auto called.
  }
  return newState;
};
export default reducer;
