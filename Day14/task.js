

console.log("output for promise.all");
const onepromise = new Promise((resolve, reject) => {

    fetch('https://www.w3schools.com/js/js_promise.asp')
      
       resolve('accepted onepromise')
       reject("onepromise error");

});

const twopromise = new Promise((resolve, reject) => {
  
    fetch('https://www.w3schools.com/js/js_promise.asp')
      
     resolve( 'accepted twopromise')
      reject("twopromise error")

});

const threepromise = new Promise((resolve, reject) => {
 
    fetch('https://www.w3schools.com/js/js_promise.asp/1')
       
      reject("threepromise error");
   
});

const fourpromise = new Promise((resolve, reject) => {
 
    fetch('https://www.w3schools.com/js/js_promise.asp')
     
      resolve("accepted fourpromise")
       reject("fourpromise error");

});
Promise.all([onepromise, twopromise, threepromise, fourpromise])
  .then((results) => {
    console.log("All Fake API data resolved:");
    console.log(results);
  })
  .catch((err) => {
    console.log("One of the fake API calls failed:");
    console.log(err);
  });