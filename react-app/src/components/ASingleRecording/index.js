import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { renderOneRecording } from '../../store/recording';
import AddComment from '../AddComment';
import CommentsRecording from '../CommentsRecording';
import DeleteRecording from '../DeleteRecording';
import AddToFavorites from '../AddToFavorites';
import ReactAudioPlayer from 'react-audio-player';
import './ASingleRecording.css';

const ASingleRecording = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const recording = useSelector((state) => state.recording);
    console.log(recording.username, 'RECORDING USERNAME FROM A SINGLE RECORDING SESSION USER')
    const recordingUsername = recording.username
    // const recordingUserId = recording.user_id
    console.log(recording, '****************** Recording from SingleRecording Component*****')
    const user = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(renderOneRecording(parseInt(id)));
    }, [dispatch, id])

    return (
        <div id='recording-page'>
            <div>
                <h3 id='single-rec-headline'>
                    <label htmlFor='recording-title'></label>
                    <div name='recording-title'>
                    {recording.title}
                    </div>
                    <label htmlFor='recording-category'></label>
                    <div name='recording-category'>
                    {recording.category}
                    </div>
                    <label htmlFor='recording-description'></label>
                    <div name='recording-description'>
                    {recording.description}
                    </div>
                    <label htmlFor='recording-user'></label>
                    <Link id='single-rec-username' to={`/users/${recording?.user_id}`} name='recording-user'>
                    {recordingUsername}
                    </Link>
                </h3>
                <div id='single-recording-user-container'>
                    {/* <label htmlFor='recording-username'></label>
                    <div name='recording-username'>
                        <Link id='single-rec-username' to={`/users/${recordingUserId}`}>
                            {`Recorded By: ${recording?.username}`}
                        </Link>
                    </div> */}
                </div>
                <div id='audio-player-container'>
                    <ReactAudioPlayer
                        src={recording.audio}
                        controls
                    />
                </div>
                <label htmlFor='delete-recording'></label>
                <div name='delete-recording'>
                    {recording.user === user.username ?
                    <div className='delete-button'>
                        <DeleteRecording />
                    </div>
                    : null}
                </div>
                <div id='add-fave-btn-container'>
                    <AddToFavorites recording_id={recording.id}/>
                </div>
                <div>
                    <AddComment />
                </div>
                <div>
                    <CommentsRecording />
                </div>
            </div>
        </div>
    )
}
export default ASingleRecording;
