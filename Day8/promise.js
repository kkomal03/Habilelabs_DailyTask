

// A Promise in JavaScript is an object representing the eventual 
// completion or failure of an asynchronous operation. 
// It's a way to handle operations that might take some time to complete, 
// like fetching data from a server or reading a file. 

// promise.all:runs multiple promises in parallel


// Promise.all([
//   Promise.resolve("One"),
//   Promise.resolve("Two"),
//   Promise.resolve("Three")
// ]).then((values) => console.log(values)); 


//.allSettled:returns all results , regardlessnof resolve /reject
// Promise.allSettled([
//   Promise.resolve("One"),
//   Promise.resolve("Two"),
//   Promise.resolve("Three")
// ]).then((values) => console.log(values)); 




//Promise.race: returns the results of the first setteld promise(weather fullfiled or rejected)
// Promise.race([
//   Promise.resolve("One"),
//   Promise.resolve("Two"),
//   Promise.resolve("Three")
// ]).then((values) => console.log(values)); 






let promise = new Promise(function (resolve, reject) {
  
  let success = false;

  if (success) {
    resolve("Data fetched successfully!");
  } else {
    reject(" Error fetching data!");
  }
});

promise
  .then((data) => {
    console.log(data); 
  })
  .catch((error) => {
    console.log(error); 
  })

.finally((data) => {
    console.log(data);
});


