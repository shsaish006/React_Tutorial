/*
Program-46: Employee CRUD (Class Component)
Notes:
1. Class component with state for employees array and new employee input.
2. deleteRow removes employee by index.
3. viewRow displays alert with employee details.
4. updateId, updateName, updateSal update state for input values.
5. addRow adds new employee to the employees array.
6. setState ensures component re-renders.
7. Table dynamically renders employees using map().
8. Input fields capture new employee details.
9. Can be extended with edit functionality.
10. Demonstrates full CRUD (Create, Read, Delete) using class component.
*/

import React from 'react';

export default class EmployeeCRUDClass extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: [
        { eId: 101, name: 'Sanjay', sal: 5000 },
        { eId: 102, name: 'Deepak', sal: 8000 }
      ],
      newEmp: { eId: '', name: '', sal: 0 }
    };
  }

  deleteRow = (ind) => {
    const employees = [...this.state.employees];
    employees.splice(ind, 1);
    this.setState({ employees });
  };

  viewRow = (emp) => alert(`Employee: ${emp.eId} ${emp.name} ${emp.sal}`);

  updateId = (e) => this.setState({ newEmp: { ...this.state.newEmp, eId: e.target.value } });
  updateName = (e) => this.setState({ newEmp: { ...this.state.newEmp, name: e.target.value } });
  updateSal = (e) => this.setState({ newEmp: { ...this.state.newEmp, sal: +e.target.value } });

  addRow = () => {
    this.setState({
      employees: [...this.state.employees, this.state.newEmp],
      newEmp: { eId: '', name: '', sal: 0 }
    });
  };

  render() {
    return (
      <div>
        <h2>Employee CRUD (Class)</h2>
        <table border="1" style={{ width: '50%' }}>
          <thead>
            <tr>
              <th>Sl No.</th><th>Emp Id</th><th>Name</th><th>Salary</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((emp, idx) => (
              <tr key={emp.eId}>
                <td>{idx + 1}</td>
                <td>{emp.eId}</td>
                <td>{emp.name}</td>
                <td>{emp.sal}</td>
                <td>
                  <button onClick={() => this.deleteRow(idx)}>Delete</button>
                  <button onClick={() => this.viewRow(emp)}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>Add New Employee</h3>
        <input placeholder="Emp Id" onChange={this.updateId} value={this.state.newEmp.eId} /> <br />
        <input placeholder="Name" onChange={this.updateName} value={this.state.newEmp.name} /> <br />
        <input placeholder="Salary" onChange={this.updateSal} value={this.state.newEmp.sal} /> <br />
        <button onClick={this.addRow}>Add Employee</button>
      </div>
    );
  }
}
