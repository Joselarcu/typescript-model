import { IStudentDAO } from '../../../api/IStudentDao';
import { Student } from '../../../../businessLayer/entities/courses/student';

export class StudentDAOLocalStorage implements IStudentDAO{
    getStudentByNif(id: string): Student {
        let student: Student = new Student();
        student.id = "1";
        student.name = "Paquirrin";
        student.nif = "4678913J";
        return student;
    }

}