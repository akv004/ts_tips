// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

/**
 * 
 * 
 * Conditionally Add to an Object or Array in JavaScript
 * 
  const withParentheses = {
  ...(trueCondition && { dogs: "woof" }),
  ...(falseCondition && { cats: "meow" }),
};



const trueCondition = true;
const falseCondition = false;

const arr = [
  ...(trueCondition ? ["dog"] : []),
  ...(falseCondition ? ["cat"] : [])
];

// ['dog']

 */
const d1 = {
  event: 'event',
  css: 'mycss',
};

const d2 = {
  event: 'event',
};
const car = (data) => {
  return {
    ...(data?.event ? { event: data.event } : { event: 'defaultEvent' }),
    ...(data?.css ? { css: data.css } : { css: 'defaultCSS' }), ////if there is no css object add default object
  };
};

console.log(JSON.stringify(car(d1)));
//if there is no css object add default object
console.log(JSON.stringify(car(d2)));
