import React, { useState } from "react";
import { useApp } from "../context/AppContext";

const AddTask = () => {
  const [task, setTask] = useState("");
  const [score, setScore] = useState(1);
  const { add_task } = useApp();

  const handleAddTask = () => {
    let newTask = {
      id: (Math.random() * 100) | 0,
      task,
      score,
      is_complete: false,
    };
    console.log("newTask");
    add_task(newTask);
  };
  return (
    <div className="add-task-row">
      <div className="add-task-flex">
        <div className="form-div">
          <label htmlFor="task">Add:</label>
          <input
            type="text"
            name="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="task..."
            className="form-control"
          />
        </div>
        <div data-number="5" className="form-div number-input">
          <label htmlFor="score">Score:</label>
          <input
            type="number"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            name="number"
            min="1"
            max="10"
            placeholder="1"
            step="1"
            className="form-control"
          />
        </div>
        <button className="add-btn" onClick={handleAddTask}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTask;
