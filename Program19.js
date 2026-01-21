// Program-19: Countries Dropdown & Datalist with Space Theme
// Demonstrates rendering a select dropdown and datalist in React with cosmic background.

import React from 'react';

export default function CountriesDemo() {
    const countries = ["India", "USA", "UK", "Australia", "Canada", "Germany", "France"];

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

    const selectStyle = {
        padding: '10px',
        fontSize: '16px',
        borderRadius: '6px',
        marginTop: '10px',
        backgroundColor: 'rgba(255,255,255,0.05)',
        color: '#fff',
        border: '1px solid #fff',
        cursor: 'pointer'
    };

    const inputStyle = {
        padding: '10px',
        fontSize: '16px',
        borderRadius: '6px',
        marginTop: '15px',
        width: '200px',
        border: '1px solid #fff',
        backgroundColor: 'rgba(255,255,255,0.05)',
        color: '#fff'
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
            <h1 style={{ fontSize: '42px', marginBottom: '20px', textShadow: '2px 2px 5px #000' }}>
                Countries Dropdown & Datalist
            </h1>

            <p style={{ maxWidth: '600px', textAlign: 'center', color: '#ccc' }}>
                Select a country from the dropdown or start typing in the input box below:
            </p>

            <label>
                Dropdown:
                <select style={selectStyle} defaultValue="India">
                    {countries.map((country, idx) => (
                        <option key={idx} value={country}>{country}</option>
                    ))}
                </select>
            </label>

            <label>
                Datalist:
                <input list="countries" name="country" id="country" style={inputStyle} placeholder="Type country..." />
                <datalist id="countries">
                    {countries.map((country, idx) => (
                        <option key={idx} value={country} />
                    ))}
                </datalist>
            </label>

            <button style={buttonStyle}>Explore Countries</button>

            <footer style={{ marginTop: '40px', color: '#aaa', fontSize: '14px' }}>
                Footer - Countries Dropdown Space Theme
            </footer>

            {/* Stars */}
            <div style={{ position: 'absolute', top: '15%', left: '10%', width: '2px', height: '2px', background: 'white', borderRadius: '50%', animation: 'twinkle 2s infinite alternate' }} />
            <div style={{ position: 'absolute', top: '60%', left: '60%', width: '2px', height: '2px', background: 'white', borderRadius: '50%', animation: 'twinkle 2s infinite alternate' }} />
            <div style={{ position: 'absolute', top: '85%', left: '30%', width: '2px', height: '2px', background: 'white', borderRadius: '50%', animation: 'twinkle 2s infinite alternate' }} />
        </div>
    );
}
