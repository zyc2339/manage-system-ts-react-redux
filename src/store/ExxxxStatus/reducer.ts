//example for reducer.ts
//don't have to update anything in this file😜
import handler from "./index";

//update state
let reducer = (state = { ...handler.state }, action: { type: string }) => {
  //dispatch() will trigger this function
  console.log("reducer called");
  let newState = JSON.parse(JSON.stringify(state)); //create a deep copy of an object

  // [optimization]

  for (let key in handler.actionNames) {
    //@ts-ignore
    if (action.type === handler.actionNames[key]) {
      //@ts-ignore
      handler.actions[handler.actionNames[key]](newState, action);
      break;
    }
  }
  return newState;
};
export default reducer;
