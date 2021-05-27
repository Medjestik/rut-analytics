import React from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';

function App() {
  return (
    <div className="page">
      <div className="overlay">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
