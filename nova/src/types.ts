export interface Task{
    id: number;
    task: string;
    completed: boolean;
}

export interface TaskState{
    tasks:Task[];
    filter:'all'|'completed'|'pending'
}