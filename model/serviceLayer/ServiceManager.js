"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CourseService_1 = require("./impl/CourseService");
var localStoragePersistenceManager_1 = require("../persistenceLayer/impl/localStorage/persistenceManager/localStoragePersistenceManager");
var sessionStoragePersistenceManager_1 = require("../persistenceLayer/impl/sessionStorage/persistenceManager/sessionStoragePersistenceManager");
var restPersistenceManager_1 = require("../persistenceLayer/impl/rest/persistenceManagers/restPersistenceManager");
var StudentService_1 = require("./impl/StudentService");
var ServiceManager = (function () {
    function ServiceManager() {
        this.localStoragePersistenceManager = new localStoragePersistenceManager_1.LocalStoragePersistenceManager;
        this.sessionStoragePersistenceManager = new sessionStoragePersistenceManager_1.SessionStoragePersistenceManager;
        this.restPersistenceManager = new restPersistenceManager_1.RestPersistenceManager;
    }
    ServiceManager.prototype.getCourseService = function () {
        if (this.courseService == null) {
            this.courseService = new CourseService_1.CourseService(this.localStoragePersistenceManager, this.sessionStoragePersistenceManager, this.restPersistenceManager);
        }
        return this.courseService;
    };
    ServiceManager.prototype.getStudentService = function () {
        if (this.studentService == null) {
            this.studentService = new StudentService_1.StudentService(this.localStoragePersistenceManager, this.sessionStoragePersistenceManager, this.restPersistenceManager);
        }
        return this.studentService;
    };
    return ServiceManager;
}());
exports.ServiceManager = ServiceManager;
//# sourceMappingURL=ServiceManager.js.map