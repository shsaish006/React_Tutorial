import React from 'react';

// Program9: Demonstrates data binding and using JS inside JSX
export default function Program9() {
  const user = { firstName: "Shivam", lastName: "Kumar" };

  // Function to format full name
  function formatName(user) {
    return user.firstName + " " + user.lastName;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Program9: Data Binding Example</h1>
      <h2>React Version: {React.version}</h2>
      <h2>1 + 1 = {1 + 1}</h2>
      <h2>First Name: {user.firstName}</h2>
      <h2>Full Name: {formatName(user)}</h2>
    </div>
  );
}
