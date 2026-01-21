// Program-16: Logical AND (&&) Example with Space Theme
// Demonstrates conditional rendering using logical AND operator in React.

import React, { Component } from 'react';

export default class LogicalAnd extends Component {
    render() {
        const unreadMessages = ['Message 1', 'Message 2', 'Message 3'];

        const containerStyle = {
            minHeight: '100vh',
            background: 'radial-gradient(circle at top left, #0f2027, #203a43, #2c5364)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            padding: '30px',
            fontFamily: "'Arial', sans-serif",
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
            backgroundColor: '#ff9900'
        };

        return (
            <div style={containerStyle}>
                <h1 style={{ fontSize: '42px', marginBottom: '20px', textShadow: '2px 2px 5px #000' }}>
                    Logical AND (&&) Conditional Demo
                </h1>

                <p style={{ maxWidth: '600px', textAlign: 'center', marginTop: '20px', color: '#ccc' }}>
                    Using the logical AND operator allows conditional rendering of elements without using if-else.
                </p>

                {/* Conditional rendering */}
                {unreadMessages.length > 0 &&
                    <h2 style={{ color: '#ff3366', marginTop: '25px' }}>
                        You have {unreadMessages.length} unread message{unreadMessages.length > 1 ? 's' : ''}.
                    </h2>
                }

                <button style={buttonStyle}>
                    Check Messages
                </button>

                {/* Explanation block */}
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
                    Logical AND is useful for quick conditional rendering of elements.
                </div>

                <footer style={{ marginTop: '40px', color: '#aaa', fontSize: '14px' }}>
                    Footer - Logical AND Space Theme
                </footer>

                {/* Stars */}
                <div style={{ position: 'absolute', top: '20%', left: '30%', width: '2px', height: '2px', background: 'white', borderRadius: '50%', animation: 'twinkle 2s infinite alternate' }} />
                <div style={{ position: 'absolute', top: '60%', left: '60%', width: '2px', height: '2px', background: 'white', borderRadius: '50%', animation: 'twinkle 2s infinite alternate' }} />
                <div style={{ position: 'absolute', top: '80%', left: '10%', width: '2px', height: '2px', background: 'white', borderRadius: '50%', animation: 'twinkle 2s infinite alternate' }} />
            </div>
        );
    }
}
