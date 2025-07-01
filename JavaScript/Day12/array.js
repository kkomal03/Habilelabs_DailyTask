//**reverse:
// The reverse() method reverses the order of the elements in an array.

// The reverse() method overwrites the original array.
let myArray=["hello", "world", "In","javascript"]
// console.log(myArray.reverse());
// console.log(myArray);







//**Sort Method: */

//alphabatical
// The sort() method sorts the elements of an array.

// The sort() method sorts the elements as strings in alphabetical and ascending order.

// The sort() method overwrites the original array.

// console.log(myArray.sort());
// console.log(myArray);


//numArray
let numArray=[21,25,100,62,44,53]
console.log(numArray.sort()); //this medthod is check only first digit no. so it will become wrong method for some times it is good only for alphabetical array

console.log(numArray.sort(function(a,b) {return a-b}))






//**include() method: */
// The includes() method returns true if an array contains a specified value.

// The includes() method returns false if the value is not found.

// The includes() method is case sensitive.

//Syntax
// array.includes(element, start)
//element	Required.
// The value to search for.

// start	Optional.
// Start position. Default is 0.
console.log(numArray.includes(31)) // this number is not present in array so it gives false
console.log(numArray.includes(21))// this number is present in array so it gives true






//***every() method:*/
// The every() method executes a function for each array element.

// The every() method returns true if the function returns true for all elements.

// The every() method returns false if the function returns false for one element.

// The every() method does not execute the function for empty elements.

// The every() method does not change the original array

//Syntax
//array.every(function(currentValue, index, arr), thisValue)


const allPositive = numArray.every(num => num > 0);

console.log(allPositive);






//***some() method : */
// The some() method in JavaScript is used to test whether at least one element in an array passes a given condition. It returns:

// true if any element passes the test.

// false if none pass.


let newArray=[12,-12,-13,-14,-15]
const somePositive = newArray.some(num => num > 0);//if one element is satisfied the condition it gives true 
const aallPositive = newArray.every(num=>num>0)//if all elemnet is staisfied the condition then it givs true
console.log(aallPositive);

console.log(somePositive);




//**slice() Method: */
// The slice() method returns selected elements in an array, as a new array.

// The slice() method selects from a given start, up to a (not inclusive) given end.

// The slice() method does not change the original array.

console.log(newArray.slice(0,3)) //it not include last index element
console.log(newArray); //not change original array
console.log(newArray.slice(-3,-1))




//*****splice() Method: */
// The splice() method adds and/or removes array elements.

// The splice() method overwrites the original array.


// Syntax
// array.splice(index, count, item1, ....., itemX)
// index	Required.
// The index (position) to add or remove items.
// A negative value counts from the end of the array.
// count	Optional.
// Number of items to be removed.
console.log(myArray)
console.log(myArray.splice(2,"In", "India"))
console.log(myArray)