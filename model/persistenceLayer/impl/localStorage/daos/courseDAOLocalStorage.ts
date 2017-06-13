import { ICourseDAO } from '../../../api/ICourseDao';
import { Course } from '../../../../businessLayer/entities/courses/course';
import { Student } from '../../../../businessLayer/entities/courses/student';

export class CourseDAOLocalStorage implements ICourseDAO{

    getCoursesFromStudent(student: Student): Array<Course> {
        var  courses: Array<Course> = [];
        for(let i = 0; i< 5; i++){
            let course = new Course();
            course.id = String(i);
            course.title ="Angular " + i;
            courses.push(course);
           
        }
        return courses;
    }

    getCourseById(id: string): Course{
        // return JSON.parse(localStorage.getItem("course"));
        let course: Course = new Course();
        course.id = "1";
        course.title = "Course angular";
        if(course.id == id){
            return course;
        }
        else{
            return null;
        }
    }
    saveCourse(course: Course){
        // localStorage.setItem("course",JSON.stringify(course));
    }

}