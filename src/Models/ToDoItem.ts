
import Base from './Base';
export default interface ToDoItem extends Base {
    task: string;
    completedDate?: Date;
    isCompleted: boolean;
    priority: ToDoPriorities
}

enum ToDoPriorities {
    High,
    Medium,
    Low
}