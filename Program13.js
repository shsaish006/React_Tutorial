// Program-13: Conditional CSS Example
// Demonstrates dynamically changing inline styles and classNames based on conditions.

import React from 'react';

export default function Demo1() {
    const num = 5; // Change this number to see different styles

    const style1 = { color: 'blue', fontWeight: 'bold', fontSize: '22px', margin: '10px' };
    const style2 = { color: 'red', fontStyle: 'italic', fontSize: '22px', margin: '10px' };

    return (
        <div style={{ padding: '30px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
            <h1 style={{ fontSize: '36px', color: 'darkblue' }}>Conditional CSS Demo</h1>

            {/* Conditional inline style */}
            <div style={num % 2 === 0 ? { color: 'green', fontSize: '24px', marginTop: '20px' } : { color: 'red', fontSize: '24px', marginTop: '20px' }}>
                Number {num} is {num % 2 === 0 ? 'Even' : 'Odd'}
            </div>

            {/* Using pre-defined style objects */}
            <div style={num % 2 === 0 ? style1 : style2}>
                Using pre-defined style objects based on condition
            </div>

            {/* Conditional className */}
            <button className={`btn btn-lg ${num % 2 === 0 ? 'btn-success' : 'btn-danger'}`} 
                style={{ marginTop: '20px', padding: '12px 25px', fontSize: '18px', cursor: 'pointer' }}>
                Click Me
            </button>

            {/* Additional explanatory paragraphs */}
            <p style={{ marginTop: '25px', fontSize: '16px', color: '#555' }}>
                Conditional styling in React allows dynamic changes to appearance based on logic.
            </p>

            <p style={{ marginTop: '15px', fontSize: '16px', fontStyle: 'italic', color: '#333' }}>
                You can conditionally render inline styles, classes, or even entire JSX elements.
            </p>

            {/* Extra styled div */}
            <div style={{
                marginTop: '30px',
                padding: '15px',
                border: '2px dashed #888',
                borderRadius: '10px',
                backgroundColor: num % 2 === 0 ? '#e0ffe0' : '#ffe0e0'
            }}>
                This block also changes color dynamically based on number parity.
            </div>

            {/* Footer */}
            <footer style={{ marginTop: '40px', fontSize: '14px', color: 'gray' }}>
                Footer - Conditional CSS Example
            </footer>
        </div>
    );
}
