import { createSlice } from "@reduxjs/toolkit";
import { TaskState } from "../types";
import { ADD_TASK, TOGGLE_TASK, DELETE_TASK, SET_FILTER } from "./action";



const initialState: TaskState ={
    tasks: [],
    filter: "all"
}

const taskSlice = createSlice({
    name:'tasks',
    initialState,
    reducers:{
        setTasks(state,action:PayloadAction<Task[]>){
            state.tasks = action.payload;
        },
     
    }
})

function taskReducer(state=initialState,action:any):TaskState{
    switch (action.type) {
        case ADD_TASK:
            return{...state, tasks:[...state.tasks,action.payload]};
        case TOGGLE_TASK:
            return{...state, 
                tasks:state.tasks.map(task=>
                    task.id ===action.payload?{...task, completed:!task.completed}:task
                ),
            };
            case DELETE_TASK:
                return{...state, 
                    tasks:state.tasks.map(task=>
                        task.id ===action.payload?{...task, completed:!task.completed}:task
                    ),
                };
            case SET_FILTER:
                return{...state,filter:action.payload}
        default:
            return state;
    }
}

export default taskReducer;