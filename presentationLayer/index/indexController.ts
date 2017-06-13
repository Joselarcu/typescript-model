import { Course } from "../../model/businessLayer/entities/courses/course";
import { ServiceManager } from '../../model/serviceLayer/ServiceManager';
import { Persistencemanager } from '../../model/persistenceLayer/persistenceManager';
import { PersistenceTechnology } from '../../model/utilitiesLayer/persistenceTechnology';
import { Student } from '../../model/businessLayer/entities/courses/student';

class IndexController {
    public static main(): any{

        let serviceManager = new ServiceManager();
  
        let courseFromLS = serviceManager.getCourseService().getCourseById("1",PersistenceTechnology.LocalStorage);
        let courseFromSS = serviceManager.getCourseService().getCourseById("2",PersistenceTechnology.SessionStorage);
        let courseFromRest = serviceManager.getCourseService().getCourseById("3",PersistenceTechnology.Rest);
        let student = new Student();

        let courses = serviceManager.getCourseService().getCoursesFromStudent(student,PersistenceTechnology.LocalStorage);
        let courses2 = serviceManager.getCourseService().getCoursesFromStudent(student,PersistenceTechnology.SessionStorage);
        let courses3 = serviceManager.getCourseService().getCoursesFromStudent(student,PersistenceTechnology.Rest);

        let Student2 = serviceManager.getStudentService().getStudentByNif("12122",PersistenceTechnology.LocalStorage);
        let Student3 = serviceManager.getStudentService().getStudentByNif("12122",PersistenceTechnology.SessionStorage);
        let Student4 = serviceManager.getStudentService().getStudentByNif("12133233",PersistenceTechnology.Rest);
        
        
    }
    
}
IndexController.main();
