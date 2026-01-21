import React from 'react';

// Program8: Using React.Fragment to group multiple elements without extra div
export default function Program8() {
  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center", marginTop: "40px" }}>Program8: Fragments Example</h1>
      <div style={{ textAlign: "center" }}>I am a div element inside Fragment</div>
      <button style={{ display: "block", margin: "20px auto" }}>I am a button inside Fragment</button>
    </React.Fragment>
  );
}
