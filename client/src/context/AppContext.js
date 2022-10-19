import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../const";

const AppContext = createContext();

export const useApp = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 1, task: "create dummy list", is_complete: false, score: 7 },
    { id: 2, task: "create protected routes", is_complete: true, score: 8 },
    {
      id: 3,
      task: "connect front-end to an express back-end",
      is_complete: false,
      score: 7,
    },
    { id: 4, task: "deploy app into prod", is_complete: true, score: 9 },
  ]);
  const [currUser, setCurrUser] = useState({});
  const navigate = useNavigate();

  //check for exisiting cookie
  useEffect(() => {
    console.log("/checking for exisiting session");
    if (!document.cookie) {
      console.log("redirect user to login, restore session");
      navigate("/login");
    } else {
      console.log("user still has session");
      navigate("/");
      // document.cookie = "auth-cookie=;max-age=-999999";
    }
  }, []);

  useEffect(() => {
    if (document.cookie) {
      fetch(`${BASE_URL}/api/tasks`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
        });
    }
  });

  const login = (user) => {
    console.log("user", user);
    document.cookie = `auth-cookie=kdieieoiov39349kd;max-age=36000`;
    navigate("/");
  };

  const logout = () => {
    console.log("logout fired!");
    document.cookie = `auth-cookie=;max-age=-99999999`;
    navigate("/login");
  };

  const add_task = (newtask) => {
    console.log("add_task action fired", newtask);

    setTasks([...tasks, newtask]);
  };

  const edit_task = (id) => {
    console.log("edit_task action fired", id);
    let temp = tasks;
    let idx = temp.findIndex((t) => t.id == id);
    console.log(temp[idx].is_complete);

    temp[idx].is_complete = !temp[idx].is_complete;
    console.log(temp[idx].is_complete);
    setTasks(temp);
  };

  const remove_task = (id) => {
    console.log("remove_task action fired", id);
    let temp = tasks;
    temp = temp.filter((t) => t.id != id);
    setTasks(temp);
  };

  const values = {
    tasks,
    currUser,
    login,
    add_task,
    remove_task,
    edit_task,
    logout,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
