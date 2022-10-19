import React, { useState } from "react";
import { useApp } from "../context/AppContext";

const TaskItem = ({ task }) => {
  const [isComplete, setIsComplete] = useState(task.is_complete);
  const { edit_task, remove_task } = useApp();

  const handleEdit = (t) => {
    console.log("Edit", t.id);

    edit_task(t.id);
    setIsComplete(!isComplete);
  };

  const handleRemove = (id) => {
    console.log("Remove", id);
    remove_task(id);
  };

  return task ? (
    <li className="task-item">
      <h3>{task.task}</h3>
      <div className="btn-row">
        <button
          onClick={() => handleEdit(task)}
          className={isComplete ? "edit-btn" : "edit-btn undo"}
        >
          {isComplete ? "Complete" : "Undo"}
        </button>
        <button onClick={() => handleRemove(task.id)} className="remove-btn">
          &times;
        </button>
      </div>
    </li>
  ) : (
    "Loading..."
  );
};

export default TaskItem;
