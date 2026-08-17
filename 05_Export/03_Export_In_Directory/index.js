const student = require("./student");

const course =  require("./course");

const teacher = require("./teacher");

module.exports = {
    student: student,
    course: course,
    teacher: teacher
};

// SHORTHAND

// module.exports = {
//     student,
//     course,
//     teacher
// };