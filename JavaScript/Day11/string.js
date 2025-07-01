let string="Hello World!"
//find the length of string
console.log(string.length)
//find the at index element from string and string index will start from 0
console.log(string.at(4))


//The includes() method returns true if a string contains a specified string.
// Otherwise it returns false.
// The includes() method is case sensitive.
console.log(string.includes("world"))
console.log(string.includes("World"))

//toUpperCase:to make uppercase to the letters
console.log(string.toUpperCase())


//toLowerCase
console.log(string.toLowerCase())



//indexOf:find the index of string/character
console.log(string.indexOf("World"))
console.log(string.indexOf("l"))
console.log(string.lastIndexOf("l"))
 


//slice:split the text from first index to last index and in output it not include last index
console.log(string.slice(1,7))


//split:The split() method splits a string into an array of substrings.

// The split() method returns the new array.

// The split() method does not change the original string.

// If (" ") is used as separator, the string is split between words.
//only comma, space ,etc like split using split method
// let a="hello"
// let b=[]
// for(let i in a)
// {
//     //The charAt() method in JavaScript is used to retrieve a single character from a string at a specified index (position).
//     b[i] = a.charAt(i)
// }
// console.log(b);


//replace:replace the character with other which i want to replace 
// const str1="hii"
// console.log(string.replace("World","India"))
// console.log(string.concat(string,str1))
let a = string.split(" ")
console.log(a);
let b = a.join("*")
console.log(b);
