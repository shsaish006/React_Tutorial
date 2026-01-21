/*
Program-90: useEffect Hook
Notes:
1. useEffect replaces componentDidMount, componentDidUpdate, componentWillUnmount.
2. Ideal for side effects: API calls, subscriptions, DOM updates.
3. Empty dependency array => runs once on mount.
4. Demonstrates fetching data from API.
5. Updates UI dynamically when data changes.
6. Handles async operations inside useEffect.
7. Beginner-friendly functional component.
8. Cleans up memory if needed (not shown here).
9. Modern React best practices.
10. Table rendering of fetched data.
*/

import React, { useState, useEffect } from "react";

export default function Test() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []); // Empty array => runs only once

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>phone</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
