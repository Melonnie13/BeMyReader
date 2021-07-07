import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersRecordings } from '../../store/recording';
import DeleteRecording from '../DeleteRecording';

const RecordingsContainer = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    // console.log(id, 'ID from recordings container id')
    const recordings = useSelector(state => Object.values(state.recording));
    // console.log(recordings, '***************RECORDINGS FROM RECORDINGS CONTAINER')
    const userPage = useSelector(state => (state.user));
    // console.log(userPage.id, "USERID FROM RECORDINGS CONTAINER**********")
    const user = useSelector(state => state.session.user)
    // console.log(user, "SESSION USER******!!!!!!!!!!!!!!!!!")

    useEffect(() => {
        dispatch(getUsersRecordings(parseInt(id)))
    }, [dispatch, id])

    return (
        <div>
            <h2>
                {`${userPage.username}'s`} Recordings
            </h2>
            <label htmlFor='user-recordings'></label>
            <div>
                {recordings.map(recording => (
                        <div name='user-recordings' className='container' key={recording.id}>
                        <Link to={`/recording/${recording.id}`}>{recording.title}</Link>
                        <div>
                            {userPage.id === user.id ?
                                <div>
                                <DeleteRecording id={recording.id}/>
                                </div>
                                : null
                            }
                        </div>
                        </div>
                ))}
            </div>
        </div>
    )
}

export default RecordingsContainer;
