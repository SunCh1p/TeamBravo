import { useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import socket from './socket';

import Home from './components/Home.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import PlayScreen from './components/PlayScreen.jsx';

//Components used back backend for testing
import TestHome from './components/testcomponents/TestHome.jsx';
import TestJoin from './components/testcomponents/TestJoin.jsx';
import TestCreate from './components/testcomponents/TestCreate.jsx';
import TestLeaderboard from './components/testcomponents/TestLeaderboard.jsx';
import TestGame from './components/testcomponents/TestGame.jsx';




function App() {

  return (
    <main className='main'>
      <div className='component-container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/play' element={<PlayScreen/>}/>
          <Route path='/leaderboard' element={<Leaderboard/>}/>
          
          <Route path='/TestHome' element={<TestHome/>}/>
          <Route path='/TestJoin' element={<TestJoin/>}/>
          <Route path='/TestCreate' element={<TestCreate/>}/>
          <Route path='/TestLeaderboard' element={<TestLeaderboard/>}/>
          <Route path='/TestGame' element={<TestGame/>}/>
        </Routes>
      </div>
    </main>
  )
}

export default App
