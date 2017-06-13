import { ICourseDAO } from '../../../api/ICourseDao';
import { Course } from '../../../../businessLayer/entities/courses/course';
import { Student } from '../../../../businessLayer/entities/courses/student';

export class CourseDAORest implements ICourseDAO {

    getCoursesFromStudent(student: Student): Course[] {
        var  courses: Array<Course> = [];
        for(let i = 0; i< 5; i++){
            let course = new Course();
            course.id = String(i);
            course.title ="Angular Rest " + i;
            courses.push(course);
           
        }
        return courses;
    }
    
    getCourseById(id: string): Course {
        let course: Course = new Course();
        course.id = "3";
        course.title = "Course angular Rest";
        if(course.id == id){
            return course;
        }
        else{
            return null;
        }
    
    }
    saveCourse(course: Course) {
        throw new Error("Method not implemented.");
    }
}
