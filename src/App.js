import React from 'react';
import logo from './logo.svg';
import './App.css';
import Present from './profile/profile'
import { render } from '@testing-library/react';
import Handle from './profile/handle'

function App() {
  render()
  return (
    <div className="App">
      <Present fullName="hanene" profession="ingénieur">
        <button>Valid</button>
      </Present>
      <Present fullName="Faten" profession="ingénieur">
        <button>Valid </button>
      </Present>
      <Present fullName="Zied" profession="ingénieur">
        <p>True</p>
        <img src={"https://p8.storage.canalblog.com/88/40/536253/88046807_o.png"}/>
      </Present>
      <Handle/>
    </div> 
    
  );
}


export default App;
