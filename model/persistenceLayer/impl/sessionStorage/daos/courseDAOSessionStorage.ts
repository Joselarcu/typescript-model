import { ICourseDAO } from '../../../api/ICourseDao';
import { Course } from '../../../../businessLayer/entities/courses/course';
import { Student } from '../../../../businessLayer/entities/courses/student';

export class CourseDAOSessionStorage implements ICourseDAO{

    getCoursesFromStudent(student: Student): Course[] {
        var  courses: Array<Course> = [];
        for(let i = 0; i< 5; i++){
            let course = new Course();
            course.id = String(i);
            course.title ="Angular SS " + i;
            courses.push(course);
           
        }
        return courses;
    }

    getCourseById(id: string): Course{
        // return JSON.parse(sessionStorage.getItem("course"));
        let course: Course = new Course();
        course.id = "2";
        course.title = "Course angular SS";
        if(course.id == id){
            return course;
        }
        else{
            return null;
        }
    
    }
    saveCourse(course: Course){
        sessionStorage.setItem("course",JSON.stringify(course));
    }

}