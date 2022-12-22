const originalObject = {
  a: 1,
  b: 2,
  c: 3
};

const updatedObject = {
  ...originalObject,
  b: 42
};

console.log(updatedObject); // { a: 1, b: 42, c: 3 }



/**

const originalObject = {
  a: 1,
  b: 2,
  c: 3
};

const updatedObject = {
  ...originalObject,
  b: undefined
};

console.log(updatedObject); // { a: 1, c: 3 }

**/
