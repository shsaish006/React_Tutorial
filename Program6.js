import React from 'react';

// Program6: Showing multiple symbols as icons without extra library
export default function Program6() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px", fontSize: "2rem" }}>
      <h1>Program6: React Icons Example</h1>
      {/* Using emojis as placeholder for icons */}
      <span style={{ margin: "10px" }}>✏️ Edit</span>
      <span style={{ margin: "10px", color: "red" }}>🗑️ Trash</span>
      <span style={{ margin: "10px" }}>📅 Calendar</span>
      <span style={{ margin: "10px" }}>⏳ Clock</span>
    </div>
  );
}
