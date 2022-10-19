import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Login, Dashboard } from "./components";
import "./App.css";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <Router>
      <AppProvider>
        <div className="app">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </AppProvider>
    </Router>
  );
}

export default App;
