"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var course_1 = require("../../../../businessLayer/entities/courses/course");
var CourseDAOLocalStorage = (function () {
    function CourseDAOLocalStorage() {
    }
    CourseDAOLocalStorage.prototype.getCoursesFromStudent = function (student) {
        var courses = [];
        for (var i = 0; i < 5; i++) {
            var course = new course_1.Course();
            course.id = String(i);
            course.title = "Angular " + i;
            courses.push(course);
        }
        return courses;
    };
    CourseDAOLocalStorage.prototype.getCourseById = function (id) {
        // return JSON.parse(localStorage.getItem("course"));
        var course = new course_1.Course();
        course.id = "1";
        course.title = "Course angular";
        if (course.id == id) {
            return course;
        }
        else {
            return null;
        }
    };
    CourseDAOLocalStorage.prototype.saveCourse = function (course) {
        // localStorage.setItem("course",JSON.stringify(course));
    };
    return CourseDAOLocalStorage;
}());
exports.CourseDAOLocalStorage = CourseDAOLocalStorage;
//# sourceMappingURL=courseDAOLocalStorage.js.map