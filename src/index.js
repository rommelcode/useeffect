import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function GitHubUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  });

  return (
    <div>
      {users.map((u) => (
        <div>{u.login}</div>
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<GitHubUsers />, rootElement);
