"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var student_1 = require("../../../../businessLayer/entities/courses/student");
var StudentDAOSessiontorage = (function () {
    function StudentDAOSessiontorage() {
    }
    StudentDAOSessiontorage.prototype.getStudentByNif = function (id) {
        var student = new student_1.Student();
        student.id = "1";
        student.name = "Paquirrin session";
        student.nif = "4678913J";
        return student;
    };
    return StudentDAOSessiontorage;
}());
exports.StudentDAOSessiontorage = StudentDAOSessiontorage;
//# sourceMappingURL=studentDAOSessionStorage.js.map