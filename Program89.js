/*
Program-89: useState with Array Data
Notes:
1. Demonstrates dynamic array state management.
2. Add and delete employee records.
3. Controlled form inputs for adding data.
4. Real-time UI updates on array changes.
5. Uses spread operator for immutability.
6. Beginner-friendly CRUD example.
7. No backend required, pure front-end demo.
8. Easy to extend with edit/update functionality.
9. Shows clean table rendering with map().
10. Fully functional component.
*/
import React, { useState } from "react";

export default function EmployeeCRUD() {
  const [employees, setEmployees] = useState([
    { id: 101, name: "Sanjay", sal: 5000 },
    { id: 102, name: "Yash", sal: 7000 },
    { id: 103, name: "Suresh", sal: 6000 },
  ]);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [sal, setSal] = useState("");

  const resetForm = () => {
    setId("");
    setName("");
    setSal("");
  };

  const deleteEmp = (index) => {
    const temp = [...employees];
    temp.splice(index, 1);
    setEmployees(temp);
  };

  const addEmployee = (e) => {
    e.preventDefault();
    setEmployees([...employees, { id, name, sal }]);
    resetForm();
  };

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>salary</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={index}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.sal}</td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteEmp(index)}>
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <form onSubmit={addEmployee}>
        <input placeholder="ID" value={id} onChange={e => setId(e.target.value)} />
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input placeholder="Salary" value={sal} onChange={e => setSal(e.target.value)} />
        <button type="submit">Add Employee</button>
      </form>
    </>
  );
}
