import React, { useState } from "react";
import {ThemeToggle} from "./ThemeToggle";

function ToDOApp() {
  const [tasks, setTasks] = useState(["Task 1"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    // Update the newTask state with the current value of the input field
    setNewTask(event.target.value);
  }

  function addTask() {
    // Trim the input value to remove leading and trailing whitespace
    const trimTaskValue = newTask.trim();
    // Check if the trimmed value is not empty before adding it to the tasks list
    if (trimTaskValue !== ""){
        setTasks(t =>[...t, trimTaskValue]);
        setNewTask("");

    }
  }
  function deleteTask(index){
    // Filter out the task at the specified index
    const updatedTasks = tasks.filter((_, i) => i !== index);
    // Update the tasks state with the new list of tasks
    setTasks(updatedTasks);
  }
  
  return (
    <>
    
    
    
    
    <div className="to-do-container">
    <ThemeToggle/>
      <h1>To Do List</h1>
      <div className="inner-container">
        <input
          type="text"
          placeholder="Enter a task...."
          value={newTask}
          onChange={handleInputChange}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ol>
        {tasks.map((task,index )=> {
            return <li key={index}>
                <span className="text">{task}</span>
                <button className="delete-btn" onClick={()=>deleteTask(index)}>
                    Delete
                </button>
                
            </li>
        })}
      </ol>
    
    </div>
    </>
  );
}

export default ToDOApp;
