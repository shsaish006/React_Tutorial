import React from 'react';
import shiv from './Shiv.jpg'; 

export default function Program10() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Program10: Display Image Example</h1>
      <img src={shiv} alt="Shiv" style={{ width: "300px", borderRadius: "10px" }} />
    </div>
  );
}
