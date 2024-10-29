import { CompletionInfoFlags } from "typescript";

export const fetchTasks = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit+10');
    const data= await response.json();
    return data.map((item:any)=>({
        id: item.id,
        title:item.title,
        completed:item.completed
    }))
}