# Conditionally Add to an Object or Array in JavaScript



const trueCondition = true;
const falseCondition = false;

const withParentheses = {
  ...(trueCondition && { dogs: "woof" }),
  ...(falseCondition && { cats: "meow" }),
};

// { dogs: 'woof' }

const withoutParentheses = {
  ...trueCondition && { birds: "tweet" },
  ...falseCondition && { foxes: "???" },
};

// { birds: 'tweet' }