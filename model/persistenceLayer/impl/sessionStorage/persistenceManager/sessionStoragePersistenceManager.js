"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CourseDAOSessionStorage_1 = require("../daos/CourseDAOSessionStorage");
var studentDAOSessionStorage_1 = require("../daos/studentDAOSessionStorage");
var SessionStoragePersistenceManager = (function () {
    function SessionStoragePersistenceManager() {
    }
    SessionStoragePersistenceManager.prototype.gerCourseDAO = function () {
        if (this.courseDAO == null) {
            this.courseDAO = new CourseDAOSessionStorage_1.CourseDAOSessionStorage();
        }
        return this.courseDAO;
    };
    SessionStoragePersistenceManager.prototype.getStudentDAO = function () {
        if (this.studentDAO == null) {
            this.studentDAO = new studentDAOSessionStorage_1.StudentDAOSessiontorage();
        }
        return this.studentDAO;
    };
    return SessionStoragePersistenceManager;
}());
exports.SessionStoragePersistenceManager = SessionStoragePersistenceManager;
//# sourceMappingURL=sessionStoragePersistenceManager.js.map