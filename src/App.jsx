import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Login } from './components/Login';
import './componentesCss/Login.css';
import { Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import './componentesCss/Menu.css'

function App() {
  return (
    <div className="App">
     <Routes>
     <Route path='/' element ={(<Login/>)}/>
     <Route path='/Menu' element ={(<Menu/>)}/>
     </Routes>
    </div>
  );
}

export default App;
