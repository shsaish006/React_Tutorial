// Program-11: Inline CSS Example
// This program demonstrates how to apply inline styles directly to React elements.

import React from 'react';

class App extends React.Component {
    render() {
        // Define an inline style object
        const myStyle = {
            color: 'blue',
            backgroundColor: 'yellow',
            border: '5px solid green',
            padding: '20px',
            margin: '15px',
            fontSize: '22px',
            borderRadius: '12px',
            textAlign: 'center'
        };

        const headingStyle = {
            color: 'darkblue',
            fontSize: '36px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '20px',
            fontFamily: 'Arial, sans-serif'
        };

        const paragraphStyle = {
            color: 'red',
            fontSize: '28px',
            marginBottom: '15px',
            fontStyle: 'italic'
        };

        const footerStyle = {
            marginTop: '50px',
            textAlign: 'center',
            color: 'gray',
            fontSize: '14px'
        };

        return (
            <div style={{ padding: '30px', backgroundColor: '#f9f9f9' }}>
                {/* Heading */}
                <h1 style={headingStyle}>Welcome to React Inline CSS Example</h1>

                {/* Paragraph */}
                <p style={paragraphStyle}>
                    This paragraph is styled using inline CSS directly in JSX.
                </p>

                {/* Div with custom style */}
                <div style={myStyle}>
                    This div demonstrates inline styling with multiple CSS properties.
                </div>

                {/* Another styled div */}
                <div style={{ padding: '15px', marginTop: '20px', color: 'purple', backgroundColor: '#e0f7fa', fontSize: '20px', borderRadius: '8px' }}>
                    Inline CSS allows quick customization without external CSS files.
                </div>

                {/* Button with inline styling */}
                <button style={{ marginTop: '25px', padding: '10px 20px', fontSize: '18px', backgroundColor: 'lightgreen', border: '2px solid green', borderRadius: '6px', cursor: 'pointer' }}>
                    Click Me
                </button>

                {/* Additional content for more lines */}
                <p style={{ marginTop: '30px', fontSize: '16px', color: '#555' }}>
                    Inline styles are objects in React. You can dynamically change them using JavaScript variables.
                </p>

                <div style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
                    Styling flexibility allows rapid prototyping.
                </div>

                <footer style={footerStyle}>
                    Footer Content - Inline CSS Example
                </footer>
            </div>
        );
    }
}

export default App;
