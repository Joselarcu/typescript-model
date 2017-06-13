import { Student } from '../../businessLayer/entities/courses/student';
import { PersistenceTechnology } from '../../utilitiesLayer/persistenceTechnology';

export interface IStudentService{
    getStudentByNif(nif: string, persistenceTechnology: PersistenceTechnology): Student;
}