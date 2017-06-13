"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var course_1 = require("../../../../businessLayer/entities/courses/course");
var CourseDAOSessionStorage = (function () {
    function CourseDAOSessionStorage() {
    }
    CourseDAOSessionStorage.prototype.getCoursesFromStudent = function (student) {
        var courses = [];
        for (var i = 0; i < 5; i++) {
            var course = new course_1.Course();
            course.id = String(i);
            course.title = "Angular SS " + i;
            courses.push(course);
        }
        return courses;
    };
    CourseDAOSessionStorage.prototype.getCourseById = function (id) {
        // return JSON.parse(sessionStorage.getItem("course"));
        var course = new course_1.Course();
        course.id = "2";
        course.title = "Course angular SS";
        if (course.id == id) {
            return course;
        }
        else {
            return null;
        }
    };
    CourseDAOSessionStorage.prototype.saveCourse = function (course) {
        sessionStorage.setItem("course", JSON.stringify(course));
    };
    return CourseDAOSessionStorage;
}());
exports.CourseDAOSessionStorage = CourseDAOSessionStorage;
//# sourceMappingURL=courseDAOSessionStorage.js.map