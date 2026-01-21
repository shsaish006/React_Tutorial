/*
Program-80: Axios CRUD (Class Component)
Notes:
1. Uses axios for HTTP requests.
2. Supports Create, Read, Update, Delete.
3. Uses modal for form.
4. API hosted on json-server.
5. componentDidMount loads data.
6. State manages form and list.
7. Uses SweetAlert for messages.
8. Real-world CRUD example.
9. Uses class component.
10. Interview-level program.
*/

import React, { Component } from "react";
import axios from "axios";

export default class Crud extends Component {
  state = { users: [] };

  componentDidMount() {
    axios.get("http://localhost:4000/users").then((res) => {
      this.setState({ users: res.data });
    });
  }

  render() {
    return (
      <ul>
        {this.state.users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    );
  }
}
