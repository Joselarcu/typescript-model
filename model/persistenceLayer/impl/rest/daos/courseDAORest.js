"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var course_1 = require("../../../../businessLayer/entities/courses/course");
var CourseDAORest = (function () {
    function CourseDAORest() {
    }
    CourseDAORest.prototype.getCoursesFromStudent = function (student) {
        var courses = [];
        for (var i = 0; i < 5; i++) {
            var course = new course_1.Course();
            course.id = String(i);
            course.title = "Angular Rest " + i;
            courses.push(course);
        }
        return courses;
    };
    CourseDAORest.prototype.getCourseById = function (id) {
        var course = new course_1.Course();
        course.id = "3";
        course.title = "Course angular Rest";
        if (course.id == id) {
            return course;
        }
        else {
            return null;
        }
    };
    CourseDAORest.prototype.saveCourse = function (course) {
        throw new Error("Method not implemented.");
    };
    return CourseDAORest;
}());
exports.CourseDAORest = CourseDAORest;
//# sourceMappingURL=courseDAORest.js.map