import React, { useState } from "react";
import { useApp } from "../context/AppContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const [userArr, setUserArr] = useState(["b", "r", "a", "t"]);
  const { login } = useApp();

  const handleLogin = async () => {
    console.log("handleLogin fired--");
    let user = {
      username,
      password,
    };
    try {
      login(user);
      setUsername("");
      setPassword("");
    } catch (err) {
      console.log("Error");
      setError("Error -- unauthorized access");
    }
  };
  return (
    <div className="login-app">
      <div className="login-header">
        <h1>~ Task-Tracker App ~</h1>
        <h5>
          Powered by the <strong>PERN</strong> Stack
        </h5>
      </div>

      {/* <div className="login-body"> */}
      <h3 className="login-error">{error}</h3>

      <div className="login-card">
        <div className="form-div">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            className="form-control"
            placeholder="Username..."
            autoComplete="off"
            value={username}
            onChange={(e) => {
              // setUserArr([...userArr, e.target.key]);
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="form-div">
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            name="password"
            id="password"
            className="form-control"
            autoComplete="off"
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-div">
          <button onClick={() => handleLogin()} className="login-btn">
            Login
          </button>
        </div>
      </div>
      {/* </div> */}

      <div className="login-footer">
        <strong>Footer&copy;</strong>
      </div>
    </div>
  );
};

export default Login;
