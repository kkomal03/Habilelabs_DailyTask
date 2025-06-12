
//some example of closure function
//closure function is :A function inside another function

// That accesses variables from the outer function

// And remembers them, even when the outer function has finished running
//we cant access variable from the inner function









//example1

// function createCounter() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const counter = createCounter();
// counter(); 
// counter(); 
// counter(); 




//example2
 


// function secretHolder(secret) {
//   return function () {
//     console.log("The secret is:", secret);
//   };
// }

// const getSecret = secretHolder("JavaScript is fun!");
// getSecret(); 




//example3

// function makeAdder(x) {
//   return function(y) {
//     return x + y;
//   };
// }

// const add5 = makeAdder(5);
// console.log(add5(10)); 
// console.log(add5(3));  

// const add10 = makeAdder(10);
// console.log(add10(2)); 



// //example4
// function greet(name) {
//   return function(message) {
//     //* console.log(`${message}, ${name}!`);
//      return `${message}, ${name}!`;
//   };
// }

// const greetKomal = greet("Komal");
// console.log(greetKomal("Hello"));
// //* greetKomal("Hello"); 
// //* greetKomal("Good Morning");



//basic example


function outer() {
  let name = "Komal";

  function inner() {
    console.log("Hello " + name); // inner remembers name
  }

  return inner;
}

const greet = outer(); // outer is done, but inner still remembers "name"
greet();

