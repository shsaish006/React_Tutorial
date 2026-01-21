// Program-99: React Portals Example
// **************************************
// Notes:
// 1. Portals allow rendering children into a DOM node outside the parent hierarchy.
// 2. Useful for modals, tooltips, dropdowns.
// 3. The portal preserves React context and event handling.
// 4. ReactDOM.createPortal(child, container) is used to create a portal.
// 5. Add a target div in index.html like <div id="modal-root"></div>
// 6. Style overlay and modal to make it centered.
// 7. Can use state to control visibility of modal.
// 8. Works seamlessly with parent components and events.
// 9. Helps in isolating modal UI from main app layout.
// 10. Can be reused for multiple modals in an app.
// 11. Can pass any JSX as children to portal.

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// 1. Modal Portal Component
function MyModal({ children, onClose }) {
    const overlayStyle = {
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex',
        justifyContent: 'center', alignItems: 'center',
        zIndex: 1000
    };
    const modalStyle = {
        background: '#fff', padding: '20px', borderRadius: '8px', minWidth: '300px'
    };

    return ReactDOM.createPortal(
        <div style={overlayStyle} onClick={onClose}>
            <div style={modalStyle} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>,
        document.getElementById('modal-root')
    );
}

// 2. Parent App Component
export default function App() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div style={{ padding: '20px' }}>
            <h1>React Portals Example</h1>
            <button
                style={{ padding: '10px 20px', marginTop: '10px' }}
                onClick={() => setShowModal(true)}
            >
                Open Modal
            </button>

            {/* 3. Render modal conditionally */}
            {showModal && (
                <MyModal onClose={() => setShowModal(false)}>
                    <h2>This is a Modal Window</h2>
                    <p>You can put any content here!</p>
                    <button onClick={() => setShowModal(false)}>Close Modal</button>
                </MyModal>
            )}

            <p>Click outside the modal or the close button to hide the modal.</p>
        </div>
    );
}
