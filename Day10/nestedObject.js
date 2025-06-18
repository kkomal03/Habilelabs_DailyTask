let student = {
    name: "John Doe",
    details: {
        age: 21,
        contact: {
            email: "john@example.com",
            phone: "1234567890"
        },
        grades: [
            { subject: "Math", score: 85 },
            { subject: "Science", score: 90 },
            { subject: "History", score: 76 }
        ],
        getAverage:(grades)=> {
            let sum=0;
            let average=0;
            // 2.Your logic here to calculate average score
            for(let i=0; i<grades.length; i++){
                sum += grades[i].score;
                average=sum/grades.length;
            }
            return average;

        }
        

    },
    hobbies: ["reading", "football", "coding"]
};
console.log(student.details.getAverage(student.details.grades));


// 1.Write a function to print the student’s name and age.


function printAge(obj) {
    console.log("name:",obj.name)
    console.log("Age:", obj.details.age);
}
printAge(student);







//3. Write code to list all the subjects the student is studying.
student.details.grades.forEach(grades => {
   
    console.log(grades.subject);
    
});





// 4.Add a new subject English with score 88 to the grades.

student.details.grades.push({
    subject: "English",
    score: 88
});
console.log(student.details.grades);




// 5.Write a function to print all hobbies in uppercase.


// student.hobbies.forEach(hobby => {
   
//     console.log(hobby.toUpperCase());

    
// });


function printHobbiesInUppercase(student) {
    student.hobbies.forEach(hobby => {
        console.log(hobby.toUpperCase());
    });
}
printHobbiesInUppercase(student);
