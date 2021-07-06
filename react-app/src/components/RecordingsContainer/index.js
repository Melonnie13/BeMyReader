import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersRecordings } from '../../store/recording';
import DeleteRecording from '../DeleteRecording';

const RecordingsContainer = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    // console.log(id, 'from recordings container id')
    const recordings = useSelector(state => Object.values(state.recording));
    // console.log(recordings, '***************RECORDINGS FROM RECORDINGS CONTAINER')
    const user = useSelector(state => (state.user));
    // console.log(user, "USER FROM RECORDINGS CONTAINER**********")

    useEffect(() => {
        dispatch(getUsersRecordings(parseInt(id)))
    }, [dispatch, id])

    return (
        <div>
            <h2>
                {`${user.username}'s`} Recordings
            </h2>
            <label htmlFor='user-recordings'></label>
            <div>
                {recordings.map(recording => (
                        <div name='user-recordings' className='container' key={recording.id}>
                        <Link to={`/recording/${recording.id}`}>{recording.title}</Link>
                        <DeleteRecording id={recording.id}/>
                        </div>
                ))}
            </div>
        </div>
    )
}

export default RecordingsContainer;
