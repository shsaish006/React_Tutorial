// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>Hello World...!!</h1>
//         <p>Welcome to React Community.</p>

//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import Counter from './components/Counter';

export default function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Program-93: Redux Counter</h1>
      <Counter />
    </div>
  );
}

