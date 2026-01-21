/*
Program-81: Full CRUD Using Functional Component
Notes:
1. Functional React component using useState & useEffect.
2. Axios handles API requests (GET, POST, PUT, DELETE).
3. JSON Server simulates REST API at http://localhost:4000/users.
4. Demonstrates Create, Read, Update, Delete operations.
5. Real-time UI updates after CRUD actions.
6. Input form for adding new users.
7. Buttons for editing and deleting users.
8. Modern React approach, no class components.
9. Can be extended with modal forms or validations.
10. Industry-standard functional component structure.
*/

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Crud() {
  // State to store users from API
  const [users, setUsers] = useState([]);
  
  // States for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // States for editing a user
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  // ------------------------------
  // Function: Fetch all users
  // ------------------------------
  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:4000/users");
      setUsers(res.data); // update users state
    } catch (err) {
      console.log("Error fetching users:", err);
    }
  };

  // ------------------------------
  // Function: Add a new user
  // ------------------------------
  const addUser = async () => {
    try {
      const newUser = { name, email };
      await axios.post("http://localhost:4000/users", newUser);
      fetchUsers(); // refresh user list
      setName(""); // clear form
      setEmail("");
    } catch (err) {
      console.log("Error adding user:", err);
    }
  };

  // ------------------------------
  // Function: Delete a user
  // ------------------------------
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/users/${id}`);
      fetchUsers(); // refresh user list
    } catch (err) {
      console.log("Error deleting user:", err);
    }
  };

  // ------------------------------
  // Function: Edit a user (prefill form)
  // ------------------------------
  const editUser = (user) => {
    setIsEdit(true);
    setEditId(user.id);
    setName(user.name);
    setEmail(user.email);
  };

  // ------------------------------
  // Function: Update user after editing
  // ------------------------------
  const updateUser = async () => {
    try {
      const updatedUser = { name, email };
      await axios.put(`http://localhost:4000/users/${editId}`, updatedUser);
      fetchUsers(); // refresh list
      setIsEdit(false); // reset edit mode
      setEditId(null);
      setName("");
      setEmail("");
    } catch (err) {
      console.log("Error updating user:", err);
    }
  };

  // ------------------------------
  // useEffect: Fetch users on component mount
  // ------------------------------
  useEffect(() => {
    fetchUsers();
  }, []);

  // ------------------------------
  // JSX Rendering
  // ------------------------------
  return (
    <div style={{ padding: 20 }}>
      <h2>CRUD Example (Functional Component)</h2>

      {/* Form: Add / Edit user */}
      <div style={{ marginBottom: 20 }}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        &nbsp;
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        &nbsp;
        {isEdit ? (
          <button onClick={updateUser}>Update User</button>
        ) : (
          <button onClick={addUser}>Add User</button>
        )}
      </div>

      {/* User List */}
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => editUser(user)}>Edit</button>{" "}
                  <button onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} style={{ textAlign: "center" }}>
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
