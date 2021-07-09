import React from 'react';
import { Link } from 'react-router-dom';
import AboutMe from '../AboutMe'
import './MainPage.css';
import header from '../../Images/header.png';

const MainPage = () => {
    return (
        <div id='main-page'>
            <header><img id='header' src={header} alt='Be My Reader Header'/></header>
            <label htmlFor='welcome'></label>
            <h2 id='main-page-welcome' name='welcome'>Welcome to Be My Reader:</h2>
            <label htmlFor='intro'></label>
            <h3 id='main-page-text' name='intro'>The first ever website created specifically for the Blind and Visually Impaired.</h3>
            <AboutMe />
            <div id='main-page-listen'>
                <Link to='/recordings/alphabetical'>
                    <label htmlFor='listen-button'></label>
                    <button name='listen-button' className='big-button'>
                        LISTEN
                    </button>
                </Link>
            </div>
            <div id='main-page-record'>
                <Link to='/recording/upload'>
                    <label htmlFor='record-button'></label>
                    <button name='record-button' className='big-button'>
                        RECORD
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default MainPage;
