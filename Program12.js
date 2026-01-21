// Program-12: CSS Modules Example
// Demonstrates using CSS Modules for locally scoped CSS and combining with global CSS.

import React from 'react';
import styles from './DashedBox.module.css'; // CSS Module import
import './DashedBox2.css'; // Global CSS import

const DashedBox = () => {
    return (
        <div style={{ padding: '30px', textAlign: 'center', backgroundColor: '#f0f8ff' }}>
            {/* Heading */}
            <h1 style={{ color: 'purple', fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>
                CSS Modules Example
            </h1>

            {/* Container div using CSS Module */}
            <div className={styles.container}>
                <p className={styles.content}>
                    This paragraph is styled using CSS Modules. It is scoped locally and won't conflict with other styles.
                </p>

                {/* Error div using module + global CSS */}
                <div className={`${styles.error} extra-class`} style={{ marginTop: '15px', padding: '10px' }}>
                    This div demonstrates combination of CSS Modules and global CSS.
                </div>

                {/* Extra styled content */}
                <p className={styles.content} style={{ fontStyle: 'italic', marginTop: '20px' }}>
                    CSS Modules prevent class name conflicts by scoping CSS locally.
                </p>

                <div className={styles.container} style={{ backgroundColor: '#e6f7ff', marginTop: '25px', padding: '15px' }}>
                    Nested container using same CSS Module class for consistency.
                </div>

                {/* Button to show dynamic styling */}
                <button style={{
                    marginTop: '30px',
                    padding: '12px 25px',
                    fontSize: '18px',
                    borderRadius: '8px',
                    backgroundColor: '#ffcccb',
                    border: '2px solid red',
                    cursor: 'pointer'
                }}>
                    Click Me
                </button>

                {/* Extra paragraph for explanation */}
                <p style={{ marginTop: '25px', color: '#333', fontSize: '16px' }}>
                    Using CSS Modules with React allows you to safely reuse class names across components.
                </p>

                {/* Footer */}
                <footer style={{ marginTop: '40px', color: 'gray', fontSize: '14px' }}>
                    Footer - CSS Modules Demo
                </footer>
            </div>
        </div>
    );
};

export default DashedBox;
