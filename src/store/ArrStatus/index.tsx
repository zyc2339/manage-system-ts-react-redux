//encapsulation for store array data
const state = {
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
for (let key in state.actions) {
  //@ts-ignore
  actionNames[key] = key;
}
state.actionNames = actionNames;

export default state;