const express = require("express");
const Pool = require("pg").Pool;
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4455;

const prodConfig = {
  connectionString: "",
  ssl: {},
};

const devConfig = {
  port: 5432,
  host: "localhost",
  user: "",
  password: "",
  database: "react_taskdb",
};

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });
}

let pool = new Pool(
  process.env.NODE_ENV === "production" ? prodConfig : devConfig
);

app.get("/api", async (req, res) => {
  res.json({ status: 200, msg: "Welcome to your Express API" });
});

app.get("/api/tasks", async (req, res) => {
  try {
    let data = await pool.query("SELECT * FROM tasks");
    res.json({ status: 200, tasks: data.rows });
  } catch (err) {
    console.log("error", err);
  }
});

app.get("/api/tasks/:id", async (req, res) => {
  try {
    let data = await pool.query("SELECT * FROM tasks WHERE id = $1", [
      req.params.id,
    ]);
    res.json({ status: 200, task: data.rows });
  } catch (err) {
    console.log("error", err);
  }
});

app.listen(PORT, console.log(`Listening in on port ${PORT}`));
