
import Base from './Base';
export default interface ToDoItem extends Base {
    task: string;
    completedDate?: Date;
}