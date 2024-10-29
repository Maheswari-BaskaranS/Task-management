import React from 'react'
import {useDispatch} from 'react-redux'
import { addTask } from '../store/action';

const AddTask: React.FC =()=>{
    const [task, setTask]=useState('');
    const dispatch = useDispatch();

    const handleTask=()=>{
        if(task.trim()){
            dispatch(addTask({id: Date.now(), task, completed:false}));
            setTask('');
        }
    }
    return(
        <div>
            <input
            type='text'
            placeholder='Add new Task'
            value={task}
            onChange={e=>setTask(e.target.value)}
            />
            <button onClick={handleTask}>Add Task</button>
        </div>
    )
}

export default AddTask;

function useState(arg0: string): [any, any] {
    throw new Error('Function not implemented.');
}
