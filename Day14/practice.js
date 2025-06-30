
//   const firstpromise = new Promise((resolve,reject)=>{
//     console.log("hello in first promise")
//     resolve("first promise resolved")
//   })
//   firstpromise.then((value)=>{
//     console.log("then block:",value)
//   })








//   const secondpromsie=new Promise((resolve,reject)=>
// { const myfun=(a,b)=>{
//     return a*b;

// }
//     resolve(myfun(2,3))
// })
// secondpromsie.then((value)=>{
//     console.log("a*b is:",value)
// })













// const thirdpromise = new Promise((resolve,reject)=>{
//     const value = false
//     if(value=== true){
//         resolve("value is true")
//     }else{
//         reject("value is false")
//     }

// })
// thirdpromise.then((value)=>{
//     console.log(value)
// })
// .catch(err=>{
//     console.log("we find some error:", err)
// })





// //promise.all()
// const onepromise=new Promise((resolve,reject)=>{

// })
// const twopromise = new Promise((resolve,reject)=>{

// })
// const threepromise = new Promise((resolve,reject)=>{

// })
// const fourpromise = new Promise((resolve,reject)=>{

// })
// Promise.all([onepromise,twopromise,threepromise,fourpromise]).then((data)=>{
//     console.log("All API data:");
//     console.log(data);

// }).catch(error=>{
//     console.log("Here is an error :", error)
// })








// console.log("output for promise.all");
// const onepromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     fetch('https://www.w3schools.com/js/js_promise.asp')
      
//        resolve('accepted onepromise')
//        reject("onepromise error");
//   }, 1000); 
// });

// const twopromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     fetch('https://www.w3schools.com/js/js_promise.asp')
      
//      resolve( 'accepted twopromise')
//       reject("twopromise error")
//   }, 1500); 
// });

// const threepromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     fetch('https://www.w3schools.com/js/js_promise.asp/1')
//        resolve("accepted threepromise")
//       reject("threepromise error");
//   }, 500); 
// });

// const fourpromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     fetch('https://www.w3schools.com/js/js_promise.asp')
     
//       resolve("accepted fourpromise")
//        reject("fourpromise error");
//   }, 2000); 
// });
// Promise.all([onepromise, twopromise, threepromise, fourpromise])
//   .then((results) => {
//     console.log("All Fake API data resolved:");
//     console.log(results);
//   })
//   .catch((err) => {
//     console.log("One of the fake API calls failed:");
//     console.log(err);
//   });












// console.log("output for promise.all");
// const onepromise = new Promise((resolve, reject) => {

//     fetch('https://www.w3schools.com/js/js_promise.asp')
      
//        resolve('accepted onepromise')
//        reject("onepromise error");

// });

// const twopromise = new Promise((resolve, reject) => {
  
//     fetch('https://www.w3schools.com/js/js_promise.asp')
      
//      resolve( 'accepted twopromise')
//       reject("twopromise error")

// });

// const threepromise = new Promise((resolve, reject) => {
 
//     fetch('https://www.w3schools.com/js/js_promise.asp/1')
       
//       reject("threepromise error");
   
// });

// const fourpromise = new Promise((resolve, reject) => {
 
//     fetch('https://www.w3schools.com/js/js_promise.asp')
     
//       resolve("accepted fourpromise")
//        reject("fourpromise error");

// });
// Promise.all([onepromise, twopromise, threepromise, fourpromise])
//   .then((results) => {
//     console.log("All Fake API data resolved:");
//     console.log(results);
//   })
//   .catch((err) => {
//     console.log("One of the fake API calls failed:");
//     console.log(err);
//   });






// console.log("A");

// const p = new Promise((resolve, reject) => {
//   console.log("B");
//   setTimeout(() => {
//     console.log("C");
//     resolve("D");
//   }, 0);
// });

// p.then((value) => {
//   console.log(value);
// });

// console.log("E");





// Promise.resolve()
//   .then(() => {
//     console.log("1");
//     return Promise.resolve("2");
//   })
//   .then((res) => {
//     console.log(res);
//     throw new Error("3");
//   })
//   .catch((err) => {
//     console.log("Caught:", err.message);
//     return "4";
//   })
//   .then((msg) => {
//     console.log("Final:", msg);
//   });







const myPromise = new Promise((resolve, reject) => {
  fetch("https://www.w3schools.com/js/js_promise.asp1")
    .then(data => {
      resolve("Accepted ");
    // reject("rejected")
    });
});
myPromise
  .then((data) => console.log("Resolved:", data))
  .catch((err) => console.log("Caught:", err));








// const myPromise = new Promise((resolve, reject) => {
//   fetch("https://www.w3schools.com/js/js_promise.asp") 
//     .then(data => {
//       setTimeout(() => {
//         reject("Rejected after delay");
//       }, 2000); 
//     })
// });

// myPromise
//   .then((data) => console.log("Resolved:", data))
//   .catch((err) => console.log("Caught:", err));







// const p1 = Promise.resolve("First");
// const p2 = Promise.resolve("Second");
// const p3 = Promise.resolve("Third");

// Promise.all([p1, p2, p3])
//   .then((data) => {
//     console.log("All resolved:", data);
//   })
//   .catch((err) => {
//     console.log("Caught error:", err);
//   });









//A JavaScript Promise can be settled only once.
// Once it’s resolved or rejected, any further calls to resolve() or reject() are ignored.


// const p = new Promise((resolve, reject) => {
//   resolve("First");
//   resolve("Second");
//   reject("Third");
// });

// p.then((data) => {
//   console.log("Resolved:", data);
// }).catch((err) => {
//   console.log("Caught:", err);
// });







// const p = new Promise((resolve) => {
//   resolve("Hi");
// });

// p.then((data) => {
//   console.log("First", data);
//   return "From first";
// })

// .then((data) => {
//   console.log("Second", data); // data is "Hi", NOT "From first"
// });
