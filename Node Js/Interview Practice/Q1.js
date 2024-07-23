// const student = {
//     'name': "Mine",
//     'mobile': 82828282,
//     'address':"India"
// };

const marksOfStudent = [30, 40, 87, 65, 56, 80, 20, 30, 42, 45];

//object destructuring

// subject1Marks = marksOfStudent[0];
// subject2Marks = marksOfStudent[1];
// subject3Marks = marksOfStudent[2];
// subject4Marks = marksOfStudent[3];
// subject5Marks = marksOfStudent[4];
// subject6Marks = marksOfStudent[5];

[subject1Marks, subject2Marks, subject3Marks, subject4Marks, subject5Marks, ...otherMarks] = marksOfStudent;


console.log("Subject 1",subject1Marks);
console.log("Subject 2",subject2Marks);
console.log("Subject 3",subject3Marks);
console.log("Subject 4",subject4Marks);
console.log("Subject 5",subject5Marks);
console.log("Other subs marks",otherMarks);


//object
const student = {
    'uname': "Mine",
    'mobile':82828282,
    'address':"India"
};

const {uname} = student;
console.log(uname);