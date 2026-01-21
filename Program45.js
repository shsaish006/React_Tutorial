/*
Program-45: Modal Example
Notes:
1. Uses 'react-modal' library for modal dialogs.
2. useState tracks modal open/close state.
3. openModal and closeModal functions toggle visibility.
4. shouldCloseOnOverlayClick=false disables overlay click close.
5. Modal can contain inputs, buttons, any JSX content.
6. Modal traps focus automatically for accessibility.
7. Functional component preferred over class for hooks.
8. Modal closes on ESC key by default.
9. Can be extended for forms, alerts, confirmation dialogs.
10. Styling can be customized via CSS or props.
*/

import React, { useState } from 'react';
import Modal from 'react-modal';

// Set app element for accessibility
Modal.setAppElement('#root');

export default function ModalDemo() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <h2>React Modal Example</h2>
      <button onClick={openModal}>Open Modal</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={false}
      >
        <h3>Modal Content</h3>
        <input placeholder="Type something..." />
        <br />
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </div>
  );
}

