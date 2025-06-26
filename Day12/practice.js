// const string="hello world"
// console.log(string.slice())
// console.log(string.charAt(3))
// onsole.log(string.map(key=>{
//     int 

// }))




let a="hello world"
//output:Hello World
const arr = a.split(" ");
// ["hello", "world"]
let b=[]
for(let i in arr)
{
    //hello 
    //h
    //H
    b[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    console.log(arr[i].slice(1));


}
console.log(b)
console.log(b.join(" "));



