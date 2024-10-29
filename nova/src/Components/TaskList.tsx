import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import TaskItems from "./TaskItems";
import { fetchTasks } from "../api";

const TaskList: React.FC = () => {
    const dispatch=useDispatch();

  const tasks = useSelector((state: RootState) => state.tasks);
  const filter = useSelector((state: RootState) => state.filter);

useEffect(()=>{
    fetchTasks().then((data)=>dispatch(setTasks(data)));
},[dispatch])

  const selectedTasks = tasks.filter((task) => {
    if(filter === 'all')return true;
    return filter==="completed"?task.completed:!task.completed;

  });

  return (
    <div>
      {selectedTasks.map(task => (
        <TaskItems key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
function useEffect(arg0: () => void, p0: unknown) {
    throw new Error("Function not implemented.");
}

function setTasks(data: any): any {
    throw new Error("Function not implemented.");
}

