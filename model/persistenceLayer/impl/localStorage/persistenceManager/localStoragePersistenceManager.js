"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CourseDAOLocalStorage_1 = require("../daos/CourseDAOLocalStorage");
var studentDAOLocalStorage_1 = require("../daos/studentDAOLocalStorage");
var LocalStoragePersistenceManager = (function () {
    function LocalStoragePersistenceManager() {
    }
    LocalStoragePersistenceManager.prototype.gerCourseDAO = function () {
        if (this.courseDAO == null) {
            this.courseDAO = new CourseDAOLocalStorage_1.CourseDAOLocalStorage();
        }
        return this.courseDAO;
    };
    LocalStoragePersistenceManager.prototype.getStudentDAO = function () {
        if (this.studentDAO == null) {
            this.studentDAO = new studentDAOLocalStorage_1.StudentDAOLocalStorage();
        }
        return this.studentDAO;
    };
    return LocalStoragePersistenceManager;
}());
exports.LocalStoragePersistenceManager = LocalStoragePersistenceManager;
//# sourceMappingURL=localStoragePersistenceManager.js.map