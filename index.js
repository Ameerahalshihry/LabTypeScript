// Q1
//Q2
var school = [
    { id: 1, name: 'Mohammed', level: 'one', isSenior: true },
    { id: 2, name: 'Ali', level: 'four', isSenior: true },
    { id: 3, name: 'Rashed', level: 'five', isSenior: true }
];
//Q3
function printStudent(arr) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var student = arr_1[_i];
        console.log("ID: ".concat(student.id, ", Name: ").concat(student.name, ", Level: ").concat(student.level, ", IS HE/SHE SENIOR? ").concat(student.isSenior, " "));
    }
}
printStudent(school);
