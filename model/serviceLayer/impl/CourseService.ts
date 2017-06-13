import { ICourseService } from '../api/ICourseService';
import { Course } from '../../businessLayer/entities/courses/course';
import { LocalStoragePersistenceManager } from "../../persistenceLayer/impl/localStorage/persistenceManager/localStoragePersistenceManager";
import { SessionStoragePersistenceManager } from "../../persistenceLayer/impl/sessionStorage/persistenceManager/sessionStoragePersistenceManager";
import { RestPersistenceManager } from "../../persistenceLayer/impl/rest/persistenceManagers/restPersistenceManager";
import { PersistenceTechnology } from '../../utilitiesLayer/persistenceTechnology';
import { ICourseDAO } from '../../persistenceLayer/api/ICourseDao';
import { CourseDAOLocalStorage } from '../../persistenceLayer/impl/localStorage/daos/courseDAOLocalStorage';
import { CourseDAORest } from '../../persistenceLayer/impl/rest/daos/courseDAORest';
import { Student } from '../../businessLayer/entities/courses/student';



export class CourseService implements ICourseService{
    
   

    private localStoragePersistenceManager: LocalStoragePersistenceManager;
    private sessionStoragePersistenceManager : SessionStoragePersistenceManager
    private restStoragePersistencemanager: RestPersistenceManager

    constructor(
        localStoragePersistenceManager: LocalStoragePersistenceManager,
        sessionStoragePersistenceManager: SessionStoragePersistenceManager,
        restStoragePersistencemanager: RestPersistenceManager
    ){
        this.localStoragePersistenceManager = localStoragePersistenceManager;
        this.sessionStoragePersistenceManager = sessionStoragePersistenceManager;
        this.restStoragePersistencemanager = restStoragePersistencemanager;
    }

 getCoursesFromStudent(student: Student, persistenceTechnology: PersistenceTechnology): Course[] {
        let dao: ICourseDAO;
        switch(persistenceTechnology){
            case PersistenceTechnology.LocalStorage:
                dao = this.localStoragePersistenceManager.gerCourseDAO();
            break;
            case PersistenceTechnology.SessionStorage:
                dao =  this.sessionStoragePersistenceManager.gerCourseDAO();
            break;
            case PersistenceTechnology.Rest:
                dao = this.restStoragePersistencemanager.gerCourseDAO();
            break;
        }
        return dao.getCoursesFromStudent(student);
    }

    getCourseById(id: string,persistenceTechnology: PersistenceTechnology): Course {
        // this.restStoragePersistencemanager.gerCourseDAO().getCourseById("");
        // this.sessionStoragePersistenceManager.gerCourseDAO().getCourseById("");
        // return this.localStoragePersistenceManager.gerCourseDAO().getCourseById("");
        let dao: ICourseDAO;
        switch(persistenceTechnology){
            case PersistenceTechnology.LocalStorage:
                dao = this.localStoragePersistenceManager.gerCourseDAO();
            break;
            case PersistenceTechnology.SessionStorage:
                dao =  this.sessionStoragePersistenceManager.gerCourseDAO();
            break;
            case PersistenceTechnology.Rest:
                dao = this.restStoragePersistencemanager.gerCourseDAO();
            break;
        }
        return dao.getCourseById(id);
        

    }
    
    saveCourse(course: Course,persistenceTechnology: PersistenceTechnology) {
        throw new Error("Method not implemented.");
    }


}