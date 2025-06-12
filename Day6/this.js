//this keyword:In JavaScript, this refers to the context in which a 
// function is executed — it refers to the object that is calling the function.
// But the value of this depends on how a function is called, not where it is defined.



//1. In a method (inside object):
// this refers to the object itself

// const person = {
//   name: "Komal",
//   greet: function () {
//     console.log("Hello, I'm " + this.name);
//   }
// };

// person.greet(); 







//2. In a regular function (not in object):
// this refers to the global object (in browser, it's window)


// function show() {
//   console.log(this);
// }

// show();




//3. In an arrow function:
// this is lexically bound — it uses this from the surrounding scope (not its own)

// const obj = {
//   name: "Komal",
//   arrowFunc: () => {
//     console.log(this.name); 
//   },
//   normalFunc: function () {
//     console.log(this.name); 
//   }
// };

// obj.arrowFunc();   
// obj.normalFunc(); 









// 4. With call, apply, or bind:
// You can manually set the value of this.


function greet() {
  console.log("Hi, " + this.name);
}

const user = { name: "Komal" };
greet.call(user); 
greet.apply(user);
const thisfun=greet.bind(user);
thisfun();


