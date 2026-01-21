import React, { useState } from 'react';

export default function GreetingApp() {
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if(name.trim() !== '') {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setName('');
    setIsSubmitted(false);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Greeting App</h1>
      {!isSubmitted ? (
        <div>
          <input
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div>
          <h2>Hello, {name}!</h2>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
}
