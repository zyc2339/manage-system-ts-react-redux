//this file is just for study purpose, optimized from welcome page
import { useSelector, useDispatch } from "react-redux";
import numStatus from "../store/NumStatus/index";

const Welcome = () => {
  //update store's data
  const dispatch = useDispatch();

  const { num, sarr } = useSelector((state: RootState) => ({
    num: state.NumReducer.num,
    sarr: state.ArrReducer.sarr,
  }));

  const changeNum1 = () => {
    //value is optional
    dispatch({ type: "add3", val: 100 });
  };
  const changeNum2 = () => {
    //⭐optimized in store
    //@ts-ignore : Argument of type '(dispatch: Function) => void' is not assignable to parameter of type 'UnknownAction'.ts(2345)
    dispatch(numStatus.asyncAcions.asyncAdd1);
  };

  const changeArr = () => {
    //value is optional
    dispatch({ type: "sarrpush", val: 100 });
  };

  return (
    <div className="home">
      Welcome to management system!
      <p>{num}</p>
      <button onClick={changeNum1}>Update Num!</button>
      <button onClick={changeNum2}>Update Num Async!</button>
      <p>{sarr}</p>
      <button onClick={changeArr}>Update Arr!</button>
    </div>
  );
};

export default Welcome;
