import { useSelector, useDispatch } from "react-redux";
import numStatus from "../store/NumStatus/index";

//set up global type in store.d.ts, comment out line 4-6
//import store from "@/store";
//ReturnType is a utility type that is used to extract the return type of a function type or a constructor type.
// type RootState = ReturnType<typeof store.getState>; //get the type of getState

const Welcome = () => {
  //update store's data
  const dispatch = useDispatch();

  //num
  //get store's data through useSelector()
  const myNum = useSelector((state: RootState) => {
    // console.log(state);
    // return state.num
    // 👇🏼need update here when we encapsulated reducer
    return state.NumReducer.num;
  });
  //use object destructure
  // const {num} = useSelector((state: RootState) => ({num:state.num})

  const changeNum1 = () => {
    //value is optional
    dispatch({ type: "add3", val: 100 });
  };
  const changeNum2 = () => {
    //async function using thunk:
    // dispatch((dis: Function) => {
    //   setTimeout(() => {
    //     dis({ type: "add1" });
    //   }, 1000);
    // });

    //⭐optimized in store
    //@ts-ignore : Argument of type '(dispatch: Function) => void' is not assignable to parameter of type 'UnknownAction'.ts(2345)

    dispatch(numStatus.asyncAcions.asyncAdd1);
  };

  //sarr
  const { sarr } = useSelector((state: RootState) => ({
    sarr: state.ArrReducer.sarr,
  }));

  const changeArr = () => {
    //value is optional
    dispatch({ type: "sarrpush", val: 100 });
  };

  return (
    <div className="home">
      Welcome to management system!
      <p>{myNum}</p>
      <button onClick={changeNum1}>Update Num!</button>
      <button onClick={changeNum2}>Update Num Async!</button>
      <p>{sarr}</p>
      <button onClick={changeArr}>Update Arr!</button>
    </div>
  );
};

export default Welcome;
