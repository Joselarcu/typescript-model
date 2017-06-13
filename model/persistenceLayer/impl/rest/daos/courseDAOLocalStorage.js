"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CourseDAOLocalStorage = (function () {
    function CourseDAOLocalStorage() {
    }
    CourseDAOLocalStorage.prototype.getCourseById = function (id) {
        return JSON.parse(localStorage.getItem("course"));
    };
    CourseDAOLocalStorage.prototype.saveCourse = function (course) {
        localStorage.setItem("course", JSON.stringify(course));
    };
    return CourseDAOLocalStorage;
}());
exports.CourseDAOLocalStorage = CourseDAOLocalStorage;
//# sourceMappingURL=courseDAOLocalStorage.js.map