import { IStudentDao } from '../../../api/IStudentDao';
import { Student } from '../../../../businessLayer/entities/courses/student';

export class StudentDAOSessiontorage implements IStudentDao{
    getStudentByNif(id: string): Student {
        let student: Student = new Student();
        student.id = "1";
        student.name = "Paquirrin session";
        student.nif = "4678913J";
        return student;
    }

}