let user = {
    firstname: "fusdhklgfjh",
    bio: {
        address: "fkdshaflik",
        pincode: 578364,
        marks: [
                {
                    subject: "abc",
                    value: 67,
                },
                {
                    subject: "tuyer",
                    value: 94,
                },
                {
                    subject: "xyz",
                    value: 56,
                },

            ],
            cal: (marks) => {
                let sum=0;
                for(let i=0; i<marks.length;i++){
                    if(marks[i].value>50){
                        sum += marks[i].value;
                    }
                }
              return sum;
                //cal......
            }
           
    },

    lang: ['hindi', 'english']
}


console.log(user.bio.cal(user.bio.marks));

// let sum=0;
// user.bio.marks.forEach((mark) => {
//     if (mark.value > 50) {
//         // console.log(mark.value);
//         sum += mark.value;
       
        
//     }
     
// });
// console.log(sum);

console.log(user.lang);