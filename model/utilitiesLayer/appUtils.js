"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppUtils = (function () {
    function AppUtils() {
        this.persistenceTechnology;
    }
    return AppUtils;
}());
exports.AppUtils = AppUtils;
var PersistenceTechnology;
(function (PersistenceTechnology) {
    PersistenceTechnology[PersistenceTechnology["LocalStorage"] = 1] = "LocalStorage";
    PersistenceTechnology[PersistenceTechnology["SessionStorage"] = 2] = "SessionStorage";
    PersistenceTechnology[PersistenceTechnology["rest"] = 3] = "rest";
})(PersistenceTechnology || (PersistenceTechnology = {}));
//# sourceMappingURL=appUtils.js.map