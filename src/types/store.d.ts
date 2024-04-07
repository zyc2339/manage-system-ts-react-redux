//This file will store initial global type
//Please don't use import .... from .....
//use this import("@/store") -> then you can just use it without import it inside of components

//ReturnType is a utility type that is used to extract the return type of a function type or a constructor type.
type RootState = ReturnType<typeof import("@/store").getState>; //get the type of getState

/*
In TypeScript, declaration files (.d.ts files) are used to declare types and interfaces that can be globally accessible throughout your project without the need for explicit imports.
When you declare a type in a store.d.ts file, it becomes available globally within your TypeScript project. You can then use that type anywhere in your project without the need for an explicit import statement. TypeScript automatically understands and recognizes the types declared in .d.ts files.
*/

//fix type error in store.index.tsx3️👇🏼
interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: function;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: function;
}

