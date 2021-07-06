import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import RecordingsAlpha from '../RecordingsAlpha';
import { AboutMe } from '../AboutMe';
// import Search from '../Search';

const MainPage = () => {
    return (
        <div>
            <h2>MAIN</h2>
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
