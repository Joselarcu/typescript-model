import { ICourseDAO } from './api/ICourseDao';
export interface Persistencemanager{
    gerCourseDAO(): ICourseDAO;
}

