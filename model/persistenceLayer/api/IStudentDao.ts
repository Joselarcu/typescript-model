import { Student } from '../../businessLayer/entities/courses/student';

export interface IStudentDAO{
    getStudentByNif(nif: string): Student;
}