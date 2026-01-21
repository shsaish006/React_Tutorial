// Program-14: Conditional Operator Example with Space Theme
// Demonstrates the ternary operator with a cosmic background and interactive buttons.

import React from 'react';

class Conditional extends React.Component {
    render() {
        const x = 7; // Change this number to test
        const isEven = x % 2 === 0;

        const containerStyle = {
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            background: 'radial-gradient(circle at top, #0f2027, #203a43, #2c5364)',
            fontFamily: "'Arial', sans-serif",
            padding: '30px',
            position: 'relative',
            overflow: 'hidden'
        };

        const starStyle = {
            position: 'absolute',
            width: '2px',
            height: '2px',
            background: 'white',
            borderRadius: '50%',
            animation: 'twinkle 2s infinite alternate'
        };

        const buttonStyle = {
            marginTop: '25px',
            padding: '15px 30px',
            fontSize: '18px',
            cursor: 'pointer',
            borderRadius: '8px',
            border: 'none',
            color: 'white',
            backgroundColor: isEven ? '#00ff99' : '#ff3366'
        };

        return (
            <div style={containerStyle}>
                <h1 style={{ fontSize: '42px', marginBottom: '20px', textShadow: '2px 2px 5px #000' }}>
                    Conditional Operator Demo
                </h1>

                <h2 style={{ fontSize: '32px', marginBottom: '15px', color: isEven ? '#00ff99' : '#ff3366' }}>
                    Number {x} is {isEven ? 'Even' : 'Odd'}
                </h2>

                <p style={{ maxWidth: '600px', textAlign: 'center', marginBottom: '20px', color: '#ccc' }}>
                    This example shows how to use the conditional (ternary) operator in React to render different text and styles dynamically.
                    The cosmic background adds a space explorer feel!
                </p>

                <button style={buttonStyle}>
                    {isEven ? 'Even Button' : 'Odd Button'}
                </button>

                <div style={{
                    marginTop: '30px',
                    padding: '20px',
                    borderRadius: '10px',
                    border: '1px solid #fff',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    textAlign: 'center',
                    width: '80%',
                    maxWidth: '600px'
                }}>
                    <p>Try changing the number in the code to see the conditional operator in action!</p>
                </div>

                <footer style={{ marginTop: '40px', color: '#aaa', fontSize: '14px' }}>
                    Footer - Space Explorer Theme
                </footer>

                {/* Example stars */}
                <div style={{ ...starStyle, top: '10%', left: '15%' }} />
                <div style={{ ...starStyle, top: '50%', left: '70%' }} />
                <div style={{ ...starStyle, top: '80%', left: '40%' }} />
            </div>
        );
    }
}

export default Conditional;
