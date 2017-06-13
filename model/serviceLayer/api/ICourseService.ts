import { Course } from '../../businessLayer/entities/courses/course';
import { PersistenceTechnology } from '../../utilitiesLayer/persistenceTechnology';
import { Student } from '../../businessLayer/entities/courses/student';

export interface ICourseService{
    getCourseById(id:string, persistenceTechnology: PersistenceTechnology): Course;
    saveCourse(course:Course, persistenceTechnology: PersistenceTechnology);
    getCoursesFromStudent(student: Student, persistenceTechnology: PersistenceTechnology): Array<Course>;
    

}