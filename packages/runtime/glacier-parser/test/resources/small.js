// Declare variables
let number = 42;
const greeting = 'Hello, World!';
var isActive = true;

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
const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

// Numeric literals
const binaryLiteral = 0b101010; // Binary literal
const octalLiteral = 0o745; // Octal literal
const hexLiteral = 0x1f; // Hexadecimal literal

/**
 * Multi line comment
 */
console.log(emailRegex.test("'"));
console.log(binaryLiteral, octalLiteral, hexLiteral);
