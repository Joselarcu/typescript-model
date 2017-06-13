import { Instructor } from './instructor';
import { Student } from './student';
import { Session } from './session';
import { EntityBase } from '../entityBase';

export class Course extends EntityBase{

    title: string;
    description: string;
    duration: number;
    cost: number;
    instructor: Instructor;
    registerd: Array<Student>;
    calendar: Array<Session>

    constructor(){
        super();
    }
}