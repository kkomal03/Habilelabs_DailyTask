

console.log("output for promise.all");
const onepromise = new Promise((resolve, reject) => {

    fetch('https://www.w3schools.com/js/js_promise.asp')
      
       resolve('accepted onepromise')
     

});

const twopromise = new Promise((resolve, reject) => {
  
    fetch('https://www.w3schools.com/js/js_promise.asp')
      
     resolve( 'accepted twopromise')
     

});

const threepromise = new Promise((resolve, reject) => {
 
    fetch('https://www.w3schools.com/js/js_promise.asp/1')
       
      resolve("threepromise error");
   
});

const fourpromise = new Promise((resolve, reject) => {
 
    fetch('https://www.w3schools.com/js/js_promise.asp')
     .then((data)=> {
      let res = data.json();
      if (res.status === 200) {
        resolve(res);
      } else {
        reject("error in api")
      }
     })

      // resolve("accepted fourpromise")
     

});
Promise.all([onepromise, twopromise, threepromise, fourpromise])
  .then((results) => {
    console.log("All Fake API data resolved:");
    console.log(results);
  })
  .catch((err) => {
    console.log("One of the API calls failed:");
    console.log(err);
  });