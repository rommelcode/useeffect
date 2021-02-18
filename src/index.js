import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function GitHubUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then(response => response.json())
      .then(data => {
        setUsers(data); // set users in state
      });
  }, []); // empty array because we only run once

  return (
    <div className="section">
      {users.map(user => (
        <div key={user.id} className="card">
          <h5>{user.login}</h5>
        </div>
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<GitHubUsers />, rootElement);
