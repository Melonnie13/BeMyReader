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
        <div>
            <div className='container-recordings'>
                <label htmlFor='all-recordings-alphabetically'></label>
                <div>
                    {recordings.map(recording => (
                        <div name='all-recordings-alphabetically' className='container' key={recording.id}>
                            <Link to={`/recording/${recording.id}`}>{recording.title}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default RecordingsAlpha;
