import React from 'react';
import { Link } from 'react-router-dom';
import AboutMe from '../AboutMe'
import './MainPage.css';
import banner from '../../Images/banner.png';

const MainPage = () => {
    return (
        <div id='main-page'>
            <div id='main-page-welcome'>
                <label htmlFor='welcome'></label>
                <h2 id='main-page-welcome-text' name='welcome'>Welcome to Be My Reader</h2>
            </div>
            {/* <div id='banner-container'>
            <img id='banner-image' src={banner} alt='Be My Reader Banner'/>
            </div> */}
            <div id='main-page-text'>
                <label htmlFor='intro'></label>
                <h3 id='main-page-text' name='intro'>the first ever website created specifically for the Blind and Visually Impaired</h3>
            </div>
            <div id='main-page-button-container'>
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
            <div id='about-me'>
                <AboutMe />
            </div>
        </div>
    )
}

export default MainPage;
