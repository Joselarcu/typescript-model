import { ICourseService } from "./api/ICourseService";
import { CourseService } from './impl/CourseService';


import { LocalStoragePersistenceManager } from "../persistenceLayer/impl/localStorage/persistenceManager/localStoragePersistenceManager";
import { SessionStoragePersistenceManager } from "../persistenceLayer/impl/sessionStorage/persistenceManager/sessionStoragePersistenceManager";
import { RestPersistenceManager } from "../persistenceLayer/impl/rest/persistenceManagers/restPersistenceManager";
import { IStudentService } from './api/IStudentService';
import { StudentService } from './impl/StudentService';

export class ServiceManager {

    private courseService: ICourseService;
    private studentService: IStudentService;
    
    private localStoragePersistenceManager: LocalStoragePersistenceManager;
    private sessionStoragePersistenceManager: SessionStoragePersistenceManager;
    private restPersistenceManager: RestPersistenceManager;

    constructor(){
        this.localStoragePersistenceManager = new LocalStoragePersistenceManager;
        this.sessionStoragePersistenceManager = new SessionStoragePersistenceManager;
        this.restPersistenceManager = new RestPersistenceManager;
    }

    getCourseService():ICourseService{
        if(this.courseService == null){
            this.courseService = new CourseService(
                 this.localStoragePersistenceManager,
                 this.sessionStoragePersistenceManager,
                 this.restPersistenceManager   
            );
        }
        return this.courseService;     
    }

    getStudentService(): IStudentService{
        if(this.studentService == null){
            this.studentService = new StudentService(
                 this.localStoragePersistenceManager,
                 this.sessionStoragePersistenceManager,
                 this.restPersistenceManager
            );

        }
        return this.studentService;
    }
}