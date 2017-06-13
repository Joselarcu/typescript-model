import { ICourseDAO } from '../../persistenceLayer/api/ICourseDao';
import { IStudentDAO } from '../../persistenceLayer/api/IStudentDao';
import { LocalStoragePersistenceManager } from '../../persistenceLayer/impl/localStorage/persistenceManager/localStoragePersistenceManager';
import { SessionStoragePersistenceManager } from '../../persistenceLayer/impl/sessionStorage/persistenceManager/sessionStoragePersistenceManager';
import { RestPersistenceManager } from '../../persistenceLayer/impl/rest/persistenceManagers/restPersistenceManager';
import { PersistenceTechnology } from '../../utilitiesLayer/persistenceTechnology';
import { IStudentService } from '../api/IStudentService';
import { Student } from '../../businessLayer/entities/courses/student';

export class StudentService implements IStudentService{
    restPersistenceManager: any;


    private localStoragePersistenceManager: LocalStoragePersistenceManager;
    private sessionStoragePersistenceManager : SessionStoragePersistenceManager
    private restPersistencemanager: RestPersistenceManager

    constructor(
        localStoragePersistenceManager: LocalStoragePersistenceManager,
        sessionStoragePersistenceManager: SessionStoragePersistenceManager,
        restPersistencemanager: RestPersistenceManager
    ){
        this.localStoragePersistenceManager = localStoragePersistenceManager;
        this.sessionStoragePersistenceManager = sessionStoragePersistenceManager;
        this.restPersistencemanager = restPersistencemanager;
    }

     getStudentByNif(nif: string, persistenceTechnology: PersistenceTechnology): Student {
        let dao: IStudentDAO;
        switch(persistenceTechnology){
            case PersistenceTechnology.LocalStorage:
                dao = this.localStoragePersistenceManager.getStudentDAO();
            break;
            case PersistenceTechnology.SessionStorage:
                dao =  this.sessionStoragePersistenceManager.getStudentDAO();
            break;
            case PersistenceTechnology.Rest:
                  dao = this.restPersistencemanager.getStudentDAO();
            break;
        }
        return dao.getStudentByNif(nif);
    }


}