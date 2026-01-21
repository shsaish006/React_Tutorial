// Program-18: List of Cars Example with Space Theme
// Demonstrates rendering lists using map() with cosmic background.

import React from 'react';

export default class ListDemo extends React.Component {
    render() {
        const cars = ['Tata', 'Honda', 'Maruti', 'Hyundai', 'Toyota'];

        const containerStyle = {
            minHeight: '100vh',
            background: 'radial-gradient(circle at top right, #0f2027, #203a43, #2c5364)',
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

        const listStyle = {
            textAlign: 'left',
            backgroundColor: 'rgba(255,255,255,0.05)',
            padding: '20px',
            borderRadius: '10px',
            width: '300px',
            marginTop: '20px'
        };

        const buttonStyle = {
            marginTop: '20px',
            padding: '12px 25px',
            fontSize: '16px',
            cursor: 'pointer',
            borderRadius: '6px',
            border: 'none',
            color: '#fff',
            backgroundColor: '#ff33cc'
        };

        return (
            <div style={containerStyle}>
                <h1 style={{ fontSize: '42px', textShadow: '2px 2px 5px #000' }}>
                    List of Cars
                </h1>

                <ul style={listStyle}>
                    {cars.map((car, idx) => (
                        <li key={idx} style={{ marginBottom: '10px', fontSize: '18px' }}>
                            {idx + 1} - {car}
                        </li>
                    ))}
                </ul>

                <button style={buttonStyle}>
                    Explore Cars
                </button>

                <footer style={{ marginTop: '40px', color: '#aaa', fontSize: '14px' }}>
                    Footer - List Example Space Theme
                </footer>

                {/* Stars */}
                <div style={{ position: 'absolute', top: '20%', left: '10%', width: '2px', height: '2px', background: 'white', borderRadius: '50%', animation: 'twinkle 2s infinite alternate' }} />
                <div style={{ position: 'absolute', top: '60%', left: '70%', width: '2px', height: '2px', background: 'white', borderRadius: '50%', animation: 'twinkle 2s infinite alternate' }} />
            </div>
        );
    }
}
