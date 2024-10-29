import React from "react";
import { Task } from "../types";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../store/action";

interface TaskItems {
  task: Task;
}

const TaskItem: React.FC<TaskItems> = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.task}
      </span>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </div>
  );
};

export default TaskItem;