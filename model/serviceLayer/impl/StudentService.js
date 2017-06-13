"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var persistenceTechnology_1 = require("../../utilitiesLayer/persistenceTechnology");
var StudentService = (function () {
    function StudentService(localStoragePersistenceManager, sessionStoragePersistenceManager, restPersistencemanager) {
        this.localStoragePersistenceManager = localStoragePersistenceManager;
        this.sessionStoragePersistenceManager = sessionStoragePersistenceManager;
        this.restPersistencemanager = restPersistencemanager;
    }
    StudentService.prototype.getStudentByNif = function (nif, persistenceTechnology) {
        var dao;
        switch (persistenceTechnology) {
            case persistenceTechnology_1.PersistenceTechnology.LocalStorage:
                dao = this.localStoragePersistenceManager.getStudentDAO();
                break;
            case persistenceTechnology_1.PersistenceTechnology.SessionStorage:
                dao = this.sessionStoragePersistenceManager.getStudentDAO();
                break;
            case persistenceTechnology_1.PersistenceTechnology.Rest:
                dao = this.restPersistencemanager.getStudentDAO();
                break;
        }
        return dao.getStudentByNif(nif);
    };
    return StudentService;
}());
exports.StudentService = StudentService;
//# sourceMappingURL=StudentService.js.map