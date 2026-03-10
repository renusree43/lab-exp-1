import React, { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    name: "cH.RENU SREE CHARITHA",
    role: "Student",
    status: "Active",
  });

  const changeRole = () => {
    setUser({ ...user, role: "Developer" });
  };

  const toggleStatus = () => {
    setUser({
      ...user,
      status: user.status === "Active" ? "Inactive" : "Active",
    });
  };
  return (
  <div className="dashboard">
    <div className="card">
      <h1>Profile Dashboard</h1>

      <h2>{user.name}</h2>
      <p>Role: {user.role}</p>
      <p>Status: {user.status}</p>

      <div className="button-group">
        <button className="change-btn" onClick={changeRole}>
          Change Role
        </button>

        <button className="toggle-btn" onClick={toggleStatus}>
          Toggle Status
        </button>
      </div>
    </div>
  </div>
);


}

export default App;