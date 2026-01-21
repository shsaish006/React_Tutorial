// Program-15: If-Else Conditional Example with Space Theme
// Demonstrates traditional if-else conditional rendering in React with a cosmic background.

import React from 'react';

class ConditionalIfElse extends React.Component {
    render() {
        let x = prompt("Enter a number:");
        if (x === null || x === "") x = 0;
        else x = Number(x);

        const isEven = x % 2 === 0;

        const containerStyle = {
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontFamily: "'Arial', sans-serif",
            padding: '30px',
            position: 'relative',
            overflow: 'hidden'
        };

        const buttonStyle = {
            marginTop: '25px',
            padding: '15px 30px',
            fontSize: '18px',
            borderRadius: '8px',
            cursor: 'pointer',
            border: 'none',
            color: '#fff',
            backgroundColor: isEven ? '#00ff99' : '#ff3366'
        };

        return (
            <div style={containerStyle}>
                <h1 style={{ fontSize: '42px', marginBottom: '20px', textShadow: '2px 2px 5px #000' }}>
                    If-Else Conditional Demo
                </h1>

                {isEven ? (
                    <h2 style={{ fontSize: '32px', color: '#00ff99' }}>{x} is even</h2>
                ) : (
                    <h2 style={{ fontSize: '32px', color: '#ff3366' }}>{x} is odd</h2>
                )}

                <p style={{ maxWidth: '600px', textAlign: 'center', marginTop: '20px', color: '#ccc' }}>
                    Using if-else in React allows you to render different JSX blocks based on conditions. 
                    The cosmic theme makes it visually appealing.
                </p>

                <button style={buttonStyle}>
                    {isEven ? 'Even Action' : 'Odd Action'}
                </button>

                {/* Extra explanation block */}
                <div style={{
                    marginTop: '30px',
                    padding: '20px',
                    borderRadius: '10px',
                    border: '1px solid #fff',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    width: '80%',
                    maxWidth: '600px',
                    textAlign: 'center'
                }}>
                    Change the number and refresh to see different if-else outcomes.
                </div>

                <footer style={{ marginTop: '40px', color: '#aaa', fontSize: '14px' }}>
                    Footer - If-Else Conditional Space Theme
                </footer>

                {/* Stars */}
                <div style={{ position: 'absolute', top: '10%', left: '10%', width: '2px', height: '2px', background: 'white', borderRadius: '50%', animation: 'twinkle 2s infinite alternate' }} />
                <div style={{ position: 'absolute', top: '50%', left: '70%', width: '2px', height: '2px', background: 'white', borderRadius: '50%', animation: 'twinkle 2s infinite alternate' }} />
                <div style={{ position: 'absolute', top: '80%', left: '40%', width: '2px', height: '2px', background: 'white', borderRadius: '50%', animation: 'twinkle 2s infinite alternate' }} />
            </div>
        );
    }
}

export default ConditionalIfElse;
