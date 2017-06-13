"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CourseDAOLocalStorage_1 = require("../daos/CourseDAOLocalStorage");
var LocalStoragePersistenceManager = (function () {
    function LocalStoragePersistenceManager() {
    }
    LocalStoragePersistenceManager.prototype.gerCourseDAO = function () {
        if (this.courseDAO === null) {
            this.courseDAO = new CourseDAOLocalStorage_1.CourseDAOLocalStorage();
        }
        return this.courseDAO;
    };
    return LocalStoragePersistenceManager;
}());
exports.LocalStoragePersistenceManager = LocalStoragePersistenceManager;
//# sourceMappingURL=localStoragePersistenceManager.js.map