// Program-17: Switch Case Example with Space Theme
// Demonstrates using switch-case to display the day of the week dynamically.

import React from 'react';

export default function SwitchCaseDemo() {
    const dayNumber = new Date().getDay(); // 0=Sunday, 1=Monday, ...
    let dayText = '';

    switch(dayNumber) {
        case 0: dayText = 'Sunday'; break;
        case 1: dayText = 'Monday'; break;
        case 2: dayText = 'Tuesday'; break;
        case 3: dayText = 'Wednesday'; break;
        case 4: dayText = 'Thursday'; break;
        case 5: dayText = 'Friday'; break;
        case 6: dayText = 'Saturday'; break;
        default: dayText = 'Unknown'; break;
    }

    const containerStyle = {
        minHeight: '100vh',
        background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
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
        cursor: 'pointer',
        borderRadius: '8px',
        border: 'none',
        color: '#fff',
        backgroundColor: '#ffcc00'
    };

    return (
        <div style={containerStyle}>
            <h1 style={{ fontSize: '42px', marginBottom: '20px', textShadow: '2px 2px 5px #000' }}>
                Switch Case Conditional Demo
            </h1>

            <h2 style={{ fontSize: '32px', marginBottom: '15px', color: '#00ffff' }}>
                Today is {dayText} - ({dayNumber})
            </h2>

            <p style={{ maxWidth: '600px', textAlign: 'center', color: '#ccc' }}>
                Switch-case statements allow multiple conditional branches. Change the system date to see different results.
            </p>

            <button style={buttonStyle}>
                Cosmic Check
            </button>

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
                Each branch of the switch executes only if the dayNumber matches.
            </div>

            <footer style={{ marginTop: '40px', color: '#aaa', fontSize: '14px' }}>
                Footer - Switch Case Space Theme
            </footer>

            {/* Stars */}
            <div style={{ position: 'absolute', top: '15%', left: '20%', width: '2px', height: '2px', background: 'white', borderRadius: '50%', animation: 'twinkle 2s infinite alternate' }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', width: '2px', height: '2px', background: 'white', borderRadius: '50%', animation: 'twinkle 2s infinite alternate' }} />
            <div style={{ position: 'absolute', top: '70%', left: '10%', width: '2px', height: '2px', background: 'white', borderRadius: '50%', animation: 'twinkle 2s infinite alternate' }} />
        </div>
    );
}
