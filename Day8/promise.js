// Promise.all([
//   Promise.resolve("One"),
//   Promise.resolve("Two"),
//   Promise.resolve("Three")
// ]).then((values) => console.log(values)); 



// Promise.allSettled([
//   Promise.resolve("One"),
//   Promise.resolve("Two"),
//   Promise.resolve("Three")
// ]).then((values) => console.log(values)); 



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


