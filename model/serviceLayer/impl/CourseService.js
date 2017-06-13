"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var persistenceTechnology_1 = require("../../utilitiesLayer/persistenceTechnology");
var CourseService = (function () {
    function CourseService(localStoragePersistenceManager, sessionStoragePersistenceManager, restStoragePersistencemanager) {
        this.localStoragePersistenceManager = localStoragePersistenceManager;
        this.sessionStoragePersistenceManager = sessionStoragePersistenceManager;
        this.restStoragePersistencemanager = restStoragePersistencemanager;
    }
    CourseService.prototype.getCoursesFromStudent = function (student, persistenceTechnology) {
        var dao;
        switch (persistenceTechnology) {
            case persistenceTechnology_1.PersistenceTechnology.LocalStorage:
                dao = this.localStoragePersistenceManager.gerCourseDAO();
                break;
            case persistenceTechnology_1.PersistenceTechnology.SessionStorage:
                dao = this.sessionStoragePersistenceManager.gerCourseDAO();
                break;
            case persistenceTechnology_1.PersistenceTechnology.Rest:
                dao = this.restStoragePersistencemanager.gerCourseDAO();
                break;
        }
        return dao.getCoursesFromStudent(student);
    };
    CourseService.prototype.getCourseById = function (id, persistenceTechnology) {
        // this.restStoragePersistencemanager.gerCourseDAO().getCourseById("");
        // this.sessionStoragePersistenceManager.gerCourseDAO().getCourseById("");
        // return this.localStoragePersistenceManager.gerCourseDAO().getCourseById("");
        var dao;
        switch (persistenceTechnology) {
            case persistenceTechnology_1.PersistenceTechnology.LocalStorage:
                dao = this.localStoragePersistenceManager.gerCourseDAO();
                break;
            case persistenceTechnology_1.PersistenceTechnology.SessionStorage:
                dao = this.sessionStoragePersistenceManager.gerCourseDAO();
                break;
            case persistenceTechnology_1.PersistenceTechnology.Rest:
                dao = this.restStoragePersistencemanager.gerCourseDAO();
                break;
        }
        return dao.getCourseById(id);
    };
    CourseService.prototype.saveCourse = function (course, persistenceTechnology) {
        throw new Error("Method not implemented.");
    };
    return CourseService;
}());
exports.CourseService = CourseService;
//# sourceMappingURL=CourseService.js.map