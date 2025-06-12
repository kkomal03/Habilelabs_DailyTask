
//**call:immediatly executes the function and we can pass the list of arguments

const person = {
  name: "Komal",
};

function greet(greeting, location) {
  console.log(`${greeting}, I'm ${this.name} from ${location}`);
}
// greet.call(person, "Hello", "Jaipur");




//**apply:it also executes function immediatly and one only difference in call and apply is 
// argument ,{call will pass list of arguments and aplly will pass list of array}

// greet.apply(person, ["Hi", "Udaipur"]);


//**bind:it executes the function later[You can store and call it later] 
// and pass the list of arguments

const myfun=greet.bind(person,"hii" , "Jaipur");
myfun();
