//encapsulation for store array data
const store = {
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
  // sarrpush: "sarrpush",
  actionNames: {},
};
//Generate actionNames automatically
let actionNames = {};
//loop actions
for (let key in store.actions) {
  //@ts-ignore
  actionNames[key] = key;
}
store.actionNames = actionNames;

export default store;