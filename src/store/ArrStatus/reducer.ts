//prepare data
import handleArr from "./index";

// we can skip this step👇🏼, call the data direct in reducer
// const defaultState = {...handleArr.state};

//update state             👇🏼
let reducer = (
  state = { ...handleArr.state },
  action: { type: string; val: number }
) => {
  //dispatch() will trigger this function
  console.log("reducer called");
  let newState = JSON.parse(JSON.stringify(state)); //create a deep copy of an object
  // switch (action.type) {
  //   case handleArr.sarrpush:
  //     // newState.num++;
  //     handleArr.actions[handleArr.sarrpush](newState, action);
  //     break;

  //   default:
  //     break;
  // }
  for (let key in handleArr.actionNames) {
    if (action.type === handleArr.actionNames[key]) {
      handleArr.actions[handleArr.actionNames[key]](newState, action);
    }
    break;
  }

  return newState;
};
export default reducer;
