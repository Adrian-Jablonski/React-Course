console.log('utils.js is running');

export const square = (x)  => x * x;

export const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

export default subtract;

// export { square, add };


// // To import in a seperate file

// import subtract, {square, add} from './utils.js';

// console.log("Running App.js")

// console.log(square(2));
// console.log(add(100, 23));
// console.log(subtract(100, 20));