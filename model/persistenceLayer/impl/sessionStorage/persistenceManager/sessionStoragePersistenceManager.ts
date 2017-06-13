import { Persistencemanager } from '../../../persistenceManager';
import { ICourseDAO } from '../../../api/ICourseDao';
import { CourseDAOSessionStorage } from '../daos/CourseDAOSessionStorage';
import { IStudentDAO } from '../../../api/IStudentDao';
import { StudentDAOSessiontorage } from '../daos/studentDAOSessionStorage';


export class SessionStoragePersistenceManager implements Persistencemanager{
   
   private courseDAO: ICourseDAO;
   private studentDAO: IStudentDAO;

    gerCourseDAO(): ICourseDAO {
        if(this.courseDAO == null){
            this.courseDAO = new CourseDAOSessionStorage();
        }
        return this.courseDAO;
    }

    getStudentDAO(): IStudentDAO{
        if(this.studentDAO == null){
            this.studentDAO = new StudentDAOSessiontorage();
        }
        return this.studentDAO;
    }

}