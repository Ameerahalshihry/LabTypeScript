// َ--------------------Q1----------------------

interface Student {
  id: number;
  name: string;
  level: string;
  isSenior: boolean;
}

// َ--------------------Q2----------------------
let school: Student[] | Teacher[] =[
    {id: 1,name: 'Mohammed',level: 'one',isSenior: true},
    {id: 2,name: 'Ali',level: 'four',isSenior: true},
    {id: 3,name: 'Rashed',level: 'five',isSenior: true}
]
// َ--------------------Q3----------------------
function printStudent(arr:Student[]){
  for (const student of arr) {
    console.log(`ID: ${student.id}, Name: ${student.name}, Level: ${student.level}, IS HE/SHE SENIOR? ${student.isSenior} `);
    
  }
  
}
printStudent(school)
// َ--------------------Q4----------------------
interface Teacher {
  id: number;
  name: string;
  specialty: string;
  courseNum: number;
}
// َ--------------------Q5----------------------
type TeacherID = [number]
type TeacherName = [string]
type Teacherspecialty = [string]
type CourseNumber = [number]

type TeacherInfo = {
  id: TeacherID,
  name: TeacherName,
  specialty: TeacherSpecialty,
  courseNum: CourseNumber
}
const teacherID: TeacherID = [11,12,13]
const teacherName: TeacherName = ["Saad",'Saud','Sara']
const teacherSpecialty: Teacherspecialty = ["Art",'JS','PHP']
const courseNumber: CourseNumber = [4,5,6]

teacherID.forEach(i => {
  school.push({
    id: teacherID[i],
    name: teacherName[i],
    specialty: teacherSpecialty[i],
    courseNum: courseNumber[i]
  })
});



// const teacher1: TeacherInfo = {
  // id: teacherID,
  // name: teacherName,
  // specialty: teacherSpecialty,
  // courseNum: courseNumber
// };


// let teacher1 : TeacherInfo ={id:1, name:"Saad",specialty:"Art",courseNum:1}