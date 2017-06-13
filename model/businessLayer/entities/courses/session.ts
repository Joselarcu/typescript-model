import { EntityBase } from '../entityBase';
import { Assistence } from './assistence';
import { Classroom }  from './classroom';

export class Session extends EntityBase{
    initDate : Date;
    endDate : Date;
    assitences: Array<Assistence>;
    classroom: Classroom;
}