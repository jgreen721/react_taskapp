import { FaSignOutAlt } from "react-icons/fa";
import TaskItem from "./TaskItem";
import { useApp } from "../context/AppContext";
import AddTask from "./AddTask";

const Dashboard = () => {
  const user = "test-user";
  const { tasks, logout } = useApp();

  const handleLogout = () => {
    console.log("handleLogout fired");
    logout();
  };
  return (
    <div className="dashboard-app">
      <div className="overlay"></div>
      <div className="dash-header">
        <h1 className="dash-h1">Welcome {user}</h1>
        <h4 className="dash-h4">
          Add/Edit <em>your</em> tasks to <strong>GREATNESS</strong>
        </h4>
        <FaSignOutAlt onClick={handleLogout} className="signout-icon" />
      </div>
      <div className="dash-task-container">
        <AddTask />
        <ul className="tasks-list">
          {tasks
            ? tasks.map((t) => <TaskItem key={t.id} task={t} />)
            : "Loading..."}
        </ul>
      </div>

      <div className="dash-footer">
        <strong>Footer&copy;</strong>
      </div>
    </div>
  );
};

export default Dashboard;
