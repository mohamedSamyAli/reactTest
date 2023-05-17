import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter';
import { DoubleCounter } from './components/DoubleCounter';

function App() {
  return (
    <div className="App">
    <Counter/>
    <DoubleCounter/>
    </div>
  );
}

export default App;
