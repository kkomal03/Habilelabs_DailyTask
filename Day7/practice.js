

//callback function: is a function that is passed as an argument to another function.

// function greeting(name) {
//   console.log(`Hello, ${name}!`);
// }

// function processUserInput(callback) {
//   let name = "Alice";
//   callback(name); // calling the callback function
// }

// processUserInput(greeting);


// console.log("Start");

// setTimeout(function () {
//   console.log("Callback executed after 2 seconds");
// }, 2000);

// console.log("End");




// function calculate(a, b, operation) {
//   return operation(a, b);
// }

// function add(x, y) {
//   return x + y;
// }

// function multiply(x, y) {
//   return x * y;
// }


// console.log(calculate(5, 3, add));       
// console.log(calculate(5, 3, multiply));  








function sayHi(name) {
  console.log("Hi " + name);
}

function sayBye(name) {
  console.log("Bye " + name);
}

function greetUser(callback, username) {
  callback(username);
}


greetUser(sayHi, "Komal");  
greetUser(sayBye, "Komal"); 
