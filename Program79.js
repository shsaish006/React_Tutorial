/*
Program-79: Fetch API Example
Notes:
1. Uses fetch() to get API data.
2. componentDidMount triggers API call.
3. Data stored in state.
4. Table renders fetched data.
5. Uses JSONPlaceholder API.
6. Demonstrates async data loading.
7. Uses class component.
8. map() used for rendering rows.
9. API call done once.
10. Common backend integration example.
*/

import React, { Component } from "react";

export default class Test extends Component {
  state = { users: [] };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ users: data }));
  }

  render() {
    return (
      <table border="1">
        <tbody>
          {this.state.users.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
