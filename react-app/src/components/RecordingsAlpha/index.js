import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllRecordingsAlpha } from '../../store/recording';
import './RecordingsAlpha.css';

const RecordingsAlpha = () => {
    const dispatch = useDispatch();
    const recordings = useSelector(state => Object.values(state.recording));
    console.log(recordings, 'from all recordings alpha component')

    useEffect(() => {
        dispatch(getAllRecordingsAlpha())
    }, [dispatch])

    return (
        <div id='alpha-page'>
            <div id='alpha-container'>
                <label htmlFor='all-recordings-alphabetically'></label>
                <div id='alpha-page-container'>
                    {recordings.map(recording => (
                        <div name='all-recordings-alphabetically' key={recording.id}>
                            <Link id='alpha-headline' to={`/recording/${recording.id}`}>{recording.title}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default RecordingsAlpha;
