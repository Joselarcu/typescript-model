import { Persistencemanager } from '../../../persistenceManager';
import { ICourseDAO } from '../../../api/ICourseDao';
import { CourseDAOLocalStorage } from '../daos/CourseDAOLocalStorage';
import { IStudentDAO } from '../../../api/IStudentDao';
import { StudentDAOLocalStorage } from '../daos/studentDAOLocalStorage';


export class LocalStoragePersistenceManager implements Persistencemanager{
   
   private courseDAO: ICourseDAO;
   private studentDAO: IStudentDAO;

    gerCourseDAO(): ICourseDAO {
        if(this.courseDAO == null){
            this.courseDAO = new CourseDAOLocalStorage();
        }
        return this.courseDAO;
    }

    getStudentDAO(): IStudentDAO{
        if(this.studentDAO == null){
            this.studentDAO = new StudentDAOLocalStorage();
        }
        return this.studentDAO;
    }

}