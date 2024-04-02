//example for index.ts
//after update state and action, just need to import the reducer into /store/index.ts😜
const store = {
  state: {
    //👉🏼update data here
  },
  //after optimizition,  the only thing we need to do is update function here
  actions: {
    //👉🏼write methid here
  },
  //name management
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
