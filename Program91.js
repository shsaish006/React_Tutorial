/*
Program-91: Custom Hook
Notes:
1. Custom hooks start with 'use' (useFetch).
2. Encapsulates logic (data fetching) for reuse.
3. Can be reused in multiple components.
4. useEffect + useState inside hook.
5. Returns only the required data.
6. Keeps components clean.
7. Handles async data fetching.
8. Easy to test and maintain.
9. Encourages DRY principle.
10. Works with any API.
*/

import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    }
    fetchData();
  }, [url]);

  return data;
}

// Usage in component
import React from "react";
import useFetch from "./useFetch";

export default function Test() {
  const users = useFetch("https://jsonplaceholder.typicode.com/users");

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
