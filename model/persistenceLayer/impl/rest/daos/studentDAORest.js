"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var student_1 = require("../../../../businessLayer/entities/courses/student");
var StudentDAORest = (function () {
    function StudentDAORest() {
    }
    StudentDAORest.prototype.getStudentByNif = function (id) {
        var student = new student_1.Student();
        student.id = "1";
        student.name = "Paquirrin rest";
        student.nif = "4678913J";
        return student;
    };
    return StudentDAORest;
}());
exports.StudentDAORest = StudentDAORest;
//# sourceMappingURL=studentDAORest.js.map