"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ServiceManager_1 = require("../../model/serviceLayer/ServiceManager");
var persistenceTechnology_1 = require("../../model/utilitiesLayer/persistenceTechnology");
var student_1 = require("../../model/businessLayer/entities/courses/student");
var IndexController = (function () {
    function IndexController() {
    }
    IndexController.main = function () {
        var serviceManager = new ServiceManager_1.ServiceManager();
        var courseFromLS = serviceManager.getCourseService().getCourseById("1", persistenceTechnology_1.PersistenceTechnology.LocalStorage);
        var courseFromSS = serviceManager.getCourseService().getCourseById("2", persistenceTechnology_1.PersistenceTechnology.SessionStorage);
        var courseFromRest = serviceManager.getCourseService().getCourseById("3", persistenceTechnology_1.PersistenceTechnology.Rest);
        var student = new student_1.Student();
        var courses = serviceManager.getCourseService().getCoursesFromStudent(student, persistenceTechnology_1.PersistenceTechnology.LocalStorage);
        var courses2 = serviceManager.getCourseService().getCoursesFromStudent(student, persistenceTechnology_1.PersistenceTechnology.SessionStorage);
        var courses3 = serviceManager.getCourseService().getCoursesFromStudent(student, persistenceTechnology_1.PersistenceTechnology.Rest);
        var Student2 = serviceManager.getStudentService().getStudentByNif("12122", persistenceTechnology_1.PersistenceTechnology.LocalStorage);
        var Student3 = serviceManager.getStudentService().getStudentByNif("12122", persistenceTechnology_1.PersistenceTechnology.SessionStorage);
        var Student4 = serviceManager.getStudentService().getStudentByNif("12133233", persistenceTechnology_1.PersistenceTechnology.Rest);
    };
    return IndexController;
}());
IndexController.main();
//# sourceMappingURL=indexController.js.map