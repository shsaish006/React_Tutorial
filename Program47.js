/*
Program-47: Employee CRUD (Functional Component)
Notes:
1. Functional component using useState for employees, edit mode, and selectedEmployee.
2. deleteEmployee removes employee from list.
3. addEmployee adds a new employee.
4. editEmployee sets selected employee and activates edit form.
5. saveEditedEmployee updates the employee in the list.
6. cancelSave resets edit form and deactivates edit mode.
7. Components separated: EmployeeList, AddEmployee, EditEmployee.
8. Controlled inputs used for form handling.
9. Spread operator ensures immutability.
10. Demonstrates full CRUD using functional components and hooks.
*/

import React, { useState } from 'react';

export default function EmployeeCRUDFunctional() {
  const initialEmployees = [
    { eId: 101, name: 'Sanjay', sal: 5000 },
    { eId: 102, name: 'Deepak', sal: 8000 },
  ];

  const [employees, setEmployees] = useState(initialEmployees);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState({ eId: '', name: '', sal: 0 });

  const deleteEmployee = (id) => setEmployees(employees.filter(emp => emp.eId !== id));
  const addEmployee = (emp) => setEmployees([...employees, emp]);
  const editEmployee = (emp) => { setSelectedEmployee(emp); setIsEdit(true); };
  const saveEditedEmployee = (emp) => {
    setEmployees(employees.map(e => e.eId === emp.eId ? emp : e));
    setIsEdit(false);
  };
  const cancelSave = () => { setSelectedEmployee({ eId: '', name: '', sal: 0 }); setIsEdit(false); };

  return (
    <div>
      <h2>Employee CRUD (Functional)</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div>
          <h3>Employee List</h3>
          <table border="1">
            <thead><tr><th>Id</th><th>Name</th><th>Sal</th><th>Action</th></tr></thead>
            <tbody>
              {employees.map(emp => (
                <tr key={emp.eId}>
                  <td>{emp.eId}</td>
                  <td>{emp.name}</td>
                  <td>{emp.sal}</td>
                  <td>
                    <button onClick={() => deleteEmployee(emp.eId)}>Delete</button>
                    <button onClick={() => editEmployee(emp)}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          {isEdit ?
            <EditEmployee selectedEmployee={selectedEmployee} saveEditedEmployee={saveEditedEmployee} cancelSave={cancelSave} /> :
            <AddEmployee addEmployee={addEmployee} />}
        </div>
      </div>
    </div>
  );
}

function EditEmployee({ selectedEmployee, saveEditedEmployee, cancelSave }) {
  const [emp, setEmp] = useState(selectedEmployee);
  const changeHandler = (e) => setEmp({ ...emp, [e.target.name]: e.target.value });
  return (
    <div>
      <h3>Edit Employee</h3>
      <input name="eId" value={emp.eId} onChange={changeHandler} /> <br />
      <input name="name" value={emp.name} onChange={changeHandler} /> <br />
      <input name="sal" value={emp.sal} onChange={changeHandler} /> <br />
      <button onClick={cancelSave}>Cancel</button>
      <button onClick={() => saveEditedEmployee(emp)}>Save</button>
    </div>
  );
}

function AddEmployee({ addEmployee }) {
  const initialEmp = { eId: '', name: '', sal: 0 };
  const [emp, setEmp] = useState(initialEmp);
  const changeHandler = (e) => setEmp({ ...emp, [e.target.name]: e.target.value });
  return (
    <div>
      <h3>Add Employee</h3>
      <input name="eId" value={emp.eId} onChange={changeHandler} /> <br />
      <input name="name" value={emp.name} onChange={changeHandler} /> <br />
      <input name="sal" value={emp.sal} onChange={changeHandler} /> <br />
      <button onClick={() => { addEmployee(emp); setEmp(initialEmp); }}>Add</button>
    </div>
  );
}
