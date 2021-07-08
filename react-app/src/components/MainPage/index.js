import React from 'react';
import { Link } from 'react-router-dom';
import AboutMe from '../AboutMe'

const MainPage = () => {
    return (
        <div>
            <label htmlFor='welcome'></label>
            <h2 name='welcome'>Welcome to Be My Reader:</h2>
            <label htmlFor='intro'></label>
            <h3 name='intro'>The first ever website created specifically for the Blind and Visually Impaired.</h3>
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
