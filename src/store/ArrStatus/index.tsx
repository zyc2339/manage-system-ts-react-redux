//encapsulation for store array data
export default {
  state: {
    sarr: [10, 20, 30],
  },
  actions: {
    sarrpush(
      newState: { sarr: number[] },
      action: { type: string; val: number }
    ) {
      newState.sarr.push(action.val);
    },
  },
  //name management
  sarrpush: "sarrpush",
};
