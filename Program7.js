import React, { useState, useEffect } from 'react';

// Program7: Display current time updating every second
export default function Program7() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // useEffect sets up an interval to update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Program7: Clock Example</h1>
      <h2>Current Time: {time}</h2>
    </div>
  );
}
