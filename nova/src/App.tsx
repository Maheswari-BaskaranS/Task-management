import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";
import FilterTask from "./Components/FilterTask";

const App: React.FC = () => {
  return (
    <div>
      <h1>Task Management</h1>
      <AddTask />
      <FilterTask />
      <TaskList />
    </div>
  );
};

export default App;
