import React from 'react';
import { Link } from 'react-router-dom';
import AboutMe from '../AboutMe'

const MainPage = () => {
    return (
        <div>
            <h2>MAIN</h2>
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
