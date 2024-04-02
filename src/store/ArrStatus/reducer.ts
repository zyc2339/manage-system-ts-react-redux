//prepare data
import handleArr from "./index";

// we can skip this step👇🏼, call the data directly in reducer
// const defaultState = {...handleArr.state};

//update state             👇🏼
let reducer = (state = { ...handleArr.state }, action: { type: string }) => {
  //dispatch() will trigger this function
  console.log("reducer called");
  let newState = JSON.parse(JSON.stringify(state)); //create a deep copy of an object

  for (let key in handleArr.actionNames) {
    //@ts-ignore
    if (action.type === handleArr.actionNames[key]) {
      //@ts-ignore
      handleArr.actions[handleArr.actionNames[key]](newState, action);
    }
    break;
  }

  return newState;
};
export default reducer;
