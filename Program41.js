/*
Program-41: Search Employee List (No External Library)
Notes:
1. useState used for original data (employees) and filtered data.
2. Filtering done using JavaScript filter() and includes() methods.
3. JSON.stringify(emp) allows search across all fields of employee.
4. Input element used to type search text.
5. onChange handler filters employees dynamically.
6. sortAsc and sortDesc sort employees by name using localeCompare.
7. Spread operator ensures new array reference for re-render.
8. Table renders filtered employees dynamically.
9. No external library required.
10. Easily extendable to multi-field search or pagination.
11. React only re-renders affected rows for performance.
*/

import React, { useState } from "react";

export default function EmployeeListSearch() {
  const initialEmployees = [
    { number: 12, name: "Buffon", position: "ST", success: true },
    { number: 21, name: "Pirlo", position: "MC", success: false },
    { number: 10, name: "Ruiz", position: "MDI" },
    { number: 7, name: "Nesta", position: "RB", success: true },
    { number: 4, name: "Cannavaro", position: "CB" },
    { number: 2, name: "Puyol", position: "CB", success: false },
  ];

  const [employees] = useState(initialEmployees);
  const [filteredEmployees, setFilteredEmployees] = useState(initialEmployees);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    const text = e.target.value;
    setSearchText(text);
    setFilteredEmployees(
      employees.filter((emp) => JSON.stringify(emp).toLowerCase().includes(text.toLowerCase()))
    );
  };

  const sortAsc = () => {
    const sorted = [...filteredEmployees].sort((a, b) => a.name.localeCompare(b.name));
    setFilteredEmployees(sorted);
  };

  const sortDesc = () => {
    const sorted = [...filteredEmployees].sort((a, b) => b.name.localeCompare(a.name));
    setFilteredEmployees(sorted);
  };

  return (
    <div>
      <h2>Employee Search</h2>
      <input
        type="text"
        placeholder="Search here..."
        value={searchText}
        onChange={handleSearch}
        style={{ marginBottom: "10px" }}
      />
      <br />
      <button onClick={sortAsc}>Sort Asc</button>
      <button onClick={sortDesc}>Sort Desc</button>
      <table border="1" style={{ marginTop: "10px", width: "50%" }}>
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((emp, idx) => (
            <tr key={idx}>
              <td>{emp.number}</td>
              <td>{emp.name}</td>
              <td>{emp.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
