import { Course } from '../../businessLayer/entities/courses/course';
import { Student } from '../../businessLayer/entities/courses/student';

export interface ICourseDAO{
    
    getCourseById(id:string): Course;
    saveCourse(course: Course);
    getCoursesFromStudent(student: Student): Array<Course>;
}