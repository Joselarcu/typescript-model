"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var student_1 = require("../../../../businessLayer/entities/courses/student");
var StudentDAOLocalStorage = (function () {
    function StudentDAOLocalStorage() {
    }
    StudentDAOLocalStorage.prototype.getStudentByNif = function (id) {
        var student = new student_1.Student();
        student.id = "1";
        student.name = "Paquirrin";
        student.nif = "4678913J";
        return student;
    };
    return StudentDAOLocalStorage;
}());
exports.StudentDAOLocalStorage = StudentDAOLocalStorage;
//# sourceMappingURL=studentDAOLocalStorage.js.map