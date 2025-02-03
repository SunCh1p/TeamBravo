import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Camera from './Camera';

const Home = props => {
    
    const navigate = useNavigate();

    const playClick = () => {
        alert("Play was clicked");
    }

    const LeaderboardClick = () => {
        navigate("/leaderboard");
    }

    const Login = () => {
        navigate("/login")
    }


    return (
        <div className='home'>
            <div className='home-buttons-panel'>
                <button className='home-menu-button' onClick={playClick}>Play</button>
                <button className='home-menu-button' onClick={LeaderboardClick}>Leaderboard</button>
                <button className='home-menu-button' onClick={Login}>Login</button>
                <div className='home-item'>Item</div>
            </div>
            <div className='home-camera-panel'>
                <Camera/>
            </div>
        </div>
    )
}


export default Home