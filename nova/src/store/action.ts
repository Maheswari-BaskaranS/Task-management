import { Task } from "../types";

export const ADD_TASK ='ADD_TASK';
export const TOGGLE_TASK ='TOGGLE_TASK'
export const DELETE_TASK ='DELETE_TASK'
export const SET_FILTER = 'SET_FILTER'

export const addTask =(task: Task)=>({type:ADD_TASK,payload:task})
export const toggleTask =(taskId: number)=>({type:TOGGLE_TASK,payload:taskId})
export const deleteTask =(taskId: number)=>({type:DELETE_TASK,payload:taskId})
export const setFilter = (filter:'all'|'completed'|'pending')=>({type:SET_FILTER,payload:filter});