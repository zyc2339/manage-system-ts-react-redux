//encapsulation for store data
 const store = {
   state: {
     num: 20,
   },
   //after optimizition,  the only thing we need to do is update function here
   actions: {
     add1(newState: { num: number }, action: { type: string }) {
       newState.num++;
     },
     add2(newState: { num: number }, action: { type: string; val: number }) {
       newState.num += action.val;
     },
     add3(newState: { num: number }, action: { type: string; val: number }) {
       newState.num += action.val;
     },
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
