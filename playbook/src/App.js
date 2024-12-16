import logo from './logo.svg';
import './App.css';
import React from 'react';
//import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Login from './components/Login';

function App() {

  <Router>
    
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/login" element={<Login />} />
    
   
  </Routes>
  
</Router>

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>



  );
}

export default App;
