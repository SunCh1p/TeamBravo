import { useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import io from 'socket.io-client';

import Home from './components/Home.jsx';
import Leaderboard from './components/Leaderboard.jsx';
import Login from './components/login.jsx';

const socket = io.connect("https://localhost:3000");

function App() {

  return (
    <main className='main'>
      <div className='component-container'>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/leaderboard' element={<Leaderboard/>}/>
        </Routes>
      </div>
    </main>
  )
}

export default App
