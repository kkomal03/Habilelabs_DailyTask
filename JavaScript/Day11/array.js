
//push:add element to the array in last
const myarray=[10,20,30,40,50,1];
// console.log(myarray.push(6))
// console.log(myarray)


//pop:delete element from last
// console.log(myarray.pop());
// console.log(myarray)


//shift:remove first element from array
//The shift() method returns the value that was "shifted out"
// console.log(myarray.shift());
// console.log(myarray)



//unshift:add first element in array
//The unshift() method returns the new array length
// console.log(myarray.unshift(0))
// console.log(myarray)


//*****/
//filter:The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.
//Syntax
// array.filter(function(currentValue, index, arr), thisValue)


// console.log(myarray.filter(key=>key>30))
// console.log(myarray.filter(key=>key>50))//no key is present from greater then 50 so it give null array

// console.log(myarray.filter(key=>key%2===0))
// console.log(myarray)




//*****/
//map:map() creates a new array from calling a function for every array element.

// map() does not execute the function for empty elements.

// map() does not change the original array.
// Syntax
// array.map(function(currentValue, index, arr), thisValue)

// Square the elements
// console.log(myarray)
// console.log(myarray.map(key=>key*key))

//convert number to string

// console.log(myarray.map(key=>key.toString()))

//convert into uppercase using map
// const newArray=["komal", "kumawat"]
// console.log(newArray.map(key=>key.toUpperCase()))



// //add 10n to each element
// console.log(myarray.map(key=>key+10))


//length of string
// console.log(newArray.map(key=>key.length))



//mark fail/pass
// myarray.map(key=>{
//     if(key>30){
//        return pass
//     }else{
//         return fail
//     }
// })


//extract property from array of object
// const students = [
//   { name: "Komal", age: 21 },
//   { name: "Rahul", age: 20 },
//   { name: "Asha", age: 22 }
// ];

// console.log(students.map(key=>key.name))


// Mask a phone number (hide all digits except last 2)
// const number=["123456789", "234567890"]
//     const result =number.map(key=>{
//         let lastTwo = key.slice(-2)
//         let stars = "*".repeat(key.length-2)
//         return stars + lastTwo;
//     });
//     console.log(result)
    







//replace vowels with *
//k*m*l k*m*w*t
// const simArray=["Komal", "Kumawat"]
// const simresult=simArray.map(key=>{
//     let rel = key.replace('K',"a")
//     let sem = key.replace('a',"*")

//     return sem

// })
// console.log(simresult)





//REDUCE:The reduce() method executes a reducer function for array element.

// The reduce() method returns a single value: the function's accumulated result.

// The reduce() method does not execute the function for empty array elements.

// The reduce() method does not change the original array.

//sum of all elements
// const sum = myarray.reduce((x, y) => x + y,0);
// console.log(sum); 

//product of all elements
// const mul = myarray.reduce((x, y) => x * y);
// console.log(mul); 

//find maximum number
// const max = myarray.reduce((x, y) => y<x ? x:y);
// console.log(max); 

//average of numbers
// const avg = myarray.reduce((x,y)=>(x+y)/myarray.length);
// console.log(avg);

//
//
//Count how many times each letter appears
// const arr=['a','b','c','d','a','d','d']
// const count= arr.reduce()





//find():The find() method returns the value of the first element that passes a test.

// The find() method executes a function for each array element.

// The find() method returns undefined if no elements are found.

// The find() method does not execute the function for empty elements.

// The find() method does not change the original array.
//Syntax
// array.find(function(currentValue, index, arr),thisValue)


// console.log(myarray.find(key=>key>30));
// const farray=[1, 3, 7, 8, 5];
// // console.log(farray.find(key=>(key%2)===0))
// console.log(farray.find(key=>{
//     if(key%2===0)
//         return key;
// }
// ))
