//Combo Questions (Using Multiple String Methods)
// 
// 
// // Reverse Each Word
// Q: Given the string "hello world", return "olleh dlrow".



const myString = "hello world";
let b = myString.split(" ") 
let a = b.map (key => key.split("").reverse().join(""));

console.log(a.join(" "))






// Mask Email
// Q: Given an email "komal@example.com", write a program to mask it as "k***@example.com".



const mailString="komal@gmail.com"
const nn=mailString.at()
const hey =mailString.slice(mailString.indexOf("@"))
console.log(nn +"***" + hey)




// Count Vowels
// Q: Write a function that counts how many vowels are in a string str = "JavaScript".



function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }

  return count;
}

const result = countVowels("JavaScript");
console.log(result); // Output: 3

