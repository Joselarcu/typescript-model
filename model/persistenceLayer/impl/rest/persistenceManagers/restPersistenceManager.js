"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var courseDAORest_1 = require("../daos/courseDAORest");
var studentDAORest_1 = require("../daos/studentDAORest");
var RestPersistenceManager = (function () {
    function RestPersistenceManager() {
    }
    RestPersistenceManager.prototype.gerCourseDAO = function () {
        if (this.courseDAO == null) {
            this.courseDAO = new courseDAORest_1.CourseDAORest();
        }
        return this.courseDAO;
    };
    RestPersistenceManager.prototype.getStudentDAO = function () {
        if (this.studentDAO == null) {
            this.studentDAO = new studentDAORest_1.StudentDAORest();
        }
        return this.studentDAO;
    };
    return RestPersistenceManager;
}());
exports.RestPersistenceManager = RestPersistenceManager;
//# sourceMappingURL=restPersistenceManager.js.map