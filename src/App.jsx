import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Login } from './components/Login';
import './components/Login.css';
import { Routes, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
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
