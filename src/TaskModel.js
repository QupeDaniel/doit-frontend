class TaskModel {
    id;
    name;
    description;
    createdAtTime;
    lastChangeTime;
    completionState;

    constructor() {
        this.id = 0;
        this.name = '';
        this.description = '';
        this.createdAtTime = '';
        this.lastChangeTime = '';
        this.completionState = '';
        
    }
}

export default TaskModel;