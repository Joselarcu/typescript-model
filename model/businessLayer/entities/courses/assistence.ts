import { EntityBase } from '../entityBase';
import {Student} from "./student";

export class Assistence extends EntityBase{
    signature: Date;
    student: Student;
}