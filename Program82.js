/*
Program-82: Axios with Async Await (Professional Version)
Notes:
1. Uses class component with state.
2. Fetches user data from JSONPlaceholder API.
3. Loading indicator while data is fetching.
4. Error handling with try-catch.
5. Data displayed in a styled table.
6. Real-world pattern for fetching API data in React.
*/

import React, { Component } from "react";
import axios from "axios";

export default class Test extends Component {
  state = {
    users: [],
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      this.setState({ users: res.data, loading: false });
    } catch (err) {
      this.setState({ error: "Failed to fetch data", loading: false });
      console.error(err);
    }
  }

  render() {
    const { users, loading, error } = this.state;

    if (loading) {
      return <div className="text-center mt-5"><h3>Loading...</h3></div>;
    }

    if (error) {
      return <div className="text-center mt-5 text-danger"><h3>{error}</h3></div>;
    }

    return (
      <div className="container mt-5">
        <h2 className="text-center mb-4">User List</h2>
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.username}</td>
                <td>{u.email}</td>
                <td>{u.phone}</td>
                <td>{u.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
