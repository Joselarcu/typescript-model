import { Persistencemanager } from '../../../persistenceManager';
import { ICourseDAO } from '../../../api/ICourseDao';
import { CourseDAORest } from '../daos/courseDAORest';
import { IStudentDAO } from '../../../api/IStudentDao';
import { StudentDAORest } from '../daos/studentDAORest';

export class RestPersistenceManager implements Persistencemanager{
    
private courseDAO: ICourseDAO;
private studentDAO: IStudentDAO;

    gerCourseDAO(): ICourseDAO {
       if(this.courseDAO == null){
            this.courseDAO = new CourseDAORest();
        }
        return this.courseDAO;
    }

    getStudentDAO(): IStudentDAO{
        if(this.studentDAO == null){
            this.studentDAO = new StudentDAORest();
        }
        return this.studentDAO;
    }

}