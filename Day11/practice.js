// let text = " ";
// console.log(text.length)






// const arr=[1,2,3,4,5]
// console.log(arr.map());




//map and array not modified old array they create new array

const num = [1,2,3,4,5];
console.log(num.filter(key => key >3))
console.log(num.map(key => {
    if(key > 3) {
        return key
    }
}
))






//reduce method

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((x, y) => x + y, 0);
// console.log(sum); 





//find method
// const numbers =[1,2,3,2,5,4];
// console.log(numbers.filter(key => key >3))
// console.log(numbers.find(key => key >3))
   


   
    


//map,filter,find
//by default it gives array because it holds this property that when we pass an string/char then its give only return the array.

// const num = [1,2,3,4,5];
// console.log(num.filter(key => key >3))
// console.log(num.find(key => {
//     if(key > 3) {
        
//          return "djifcld";
//     }
   
// }
// ))