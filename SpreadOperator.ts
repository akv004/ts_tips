const updatedObject = {
  ...originalObject,
  b: 42
};

console.log(updatedObject); // { a: 1, b: 42, c: 3 }



//////

const originalObject1 = {
  a: 1,
  b: 2,
  c: 3
};

const updatedObject1 = {
  ...originalObject1,
  b: undefined
};

console.log(updatedObject1); // { a: 1, c: 3 }
