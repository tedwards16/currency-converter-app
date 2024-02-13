import React from 'react';
import './App.css';
import Convert from './Convert';




const App = () => {
  return (
    <div className="App">
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <h2>Currency Converter</h2>
      </nav>
      <Convert/>
            <footer className='bg-light mt-5'>Footer</footer>
    </div>
  );
}

export default App;

