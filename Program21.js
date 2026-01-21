// Program-21: Dynamic Employee Table (No Names) with Space Theme
// Iterates objects dynamically using Object.values(), only showing b (ID) and d (Salary)

import React, { Component } from 'react';

export default class DynamicEmployee extends Component {
    state = {
        showTable: true
    };

    render() {
        // Employee data: b = ID, d = Salary
        let a = [
            { b: 101, d: 5000 },
            { b: 104, d: 8000 },
            { b: 103, d: 7000 },
            { b: 102, d: 9000 }
        ];

        const toggleTable = () => {
            this.setState({ showTable: !this.state.showTable });
        };

        const containerStyle = {
            minHeight: '100vh',
            background: 'radial-gradient(circle at center, #0f2027, #203a43, #2c5364)',
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

        const tableStyle = {
            borderCollapse: 'collapse',
            width: '50%',
            maxWidth: '500px',
            backgroundColor: 'rgba(255,255,255,0.05)',
            marginTop: '20px'
        };

        const thStyle = {
            border: '1px solid #fff',
            padding: '10px',
            textAlign: 'center',
            backgroundColor: 'rgba(255,255,255,0.1)'
        };

        const tdStyle = {
            border: '1px solid #fff',
            padding: '10px',
            textAlign: 'center'
        };

        const buttonStyle = {
            marginTop: '20px',
            padding: '12px 25px',
            fontSize: '16px',
            cursor: 'pointer',
            borderRadius: '6px',
            border: 'none',
            color: '#fff',
            backgroundColor: '#00ff99'
        };

        return (
            <div style={containerStyle}>
                <h1 style={{ fontSize: '42px', textShadow: '2px 2px 5px #000' }}>
                    Dynamic Employee Table
                </h1>

                <button style={buttonStyle} onClick={toggleTable}>
                    {this.state.showTable ? "Hide Employees" : "View Employees"}
                </button>

                {this.state.showTable && (
                    <table style={tableStyle}>
                        <thead>
                            <tr>
                                <th style={thStyle}>Emp Id (b)</th>
                                <th style={thStyle}>Salary (d)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {a.map((emp) => (
                                <tr key={emp.b}>
                                    {Object.values(emp).map((val, idx) => (
                                        <td key={idx} style={tdStyle}>{val}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

                <footer style={{ marginTop: '40px', color: '#aaa', fontSize: '14px' }}>
                    Footer - Dynamic Employee Table Space Theme
                </footer>

                {/* Stars */}
                <div style={{ position: 'absolute', top: '15%', left: '15%', width: '2px', height: '2px', background: 'white', borderRadius: '50%', animation: 'twinkle 2s infinite alternate' }} />
                <div style={{ position: 'absolute', top: '50%', left: '60%', width: '2px', height: '2px', background: 'white', borderRadius: '50%', animation: 'twinkle 2s infinite alternate' }} />
            </div>
        );
    }
}
