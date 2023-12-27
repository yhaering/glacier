// Declare variables
let number = 42;
const greeting = 'Hello, World!';
var isActive = true;
var isNull = null;

// Create an array
const fruits = ['apple', 'banana', 'orange'];

// Define a function
function displayMessage(message) {
  console.log(message);
}

// Use a loop
for (let i = 0; i < fruits.length; i++) {
  displayMessage(fruits[i]);
}

// Conditional statement
if (isActive) {
  console.log('Active status is true');
} else {
  console.log('Active status is false');
}

// Object with properties
const person = {
  name: 'John',
  age: 30,
  isStudent: false
};

// Call a method
person.sayHello = function () {
  console.log('Hello from ' + this.name);
};
person.sayHello();

// Template literal
const message = `${greeting} My age is ${person.age}`;

// Arrow function
const addNumbers = (a, b) => a + b;

// Call the function
const sum = addNumbers(5, 7);

// Output the result
console.log(sum);

// Regular expression
const emailRegex = /^[\w-/]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/gu;
const anotherRegex = /[a-z]/;
const fakeRegex = /[/*]/g;

// Numeric literals
const numericLiterals = [
  0,
  1,
  1234,
  1234.5,
  1234.678,
  1234,
  2134n,
  12313e1,
  12341e2,
  123123.2e2,
  1235132.5e2,
  1235132.5e1,
  1235132.5e-2,
  1235132.5e-2,
  0b01,
  0b01,
  0b01n,
  0o01234567,
  0o01234567,
  0o01234567n,
  0x012345678abcdefabcdef,
  0x012345678abcdefabcdef,
  0x012345678abcdefabcdefn,
  0.0,
  0.1e2,
  0.1e2,
  12_34,
  12345,
  0.1234,
  0.1234,
  0.123e2,
  0.1234e2,
  0.1_2_3
];

/**
 * Multi line comment
 */
console.log(emailRegex.test("'"));
