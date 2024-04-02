import { useSelector, useDispatch } from "react-redux";

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

  const changeNum = () => {
    //value is optional
    dispatch({ type: "add2", val: 10 });
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
      <button onClick={changeNum}>Update Num!</button>
      <p>{sarr}</p>
      <button onClick={changeArr}>Update Arr!</button>
    </div>
  );
};

export default Welcome;
