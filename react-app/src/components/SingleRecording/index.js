import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { renderOneRecording } from '../../store/recording';
import AddComment from '../AddComment';
import CommentsRecording from '../CommentsRecording';
import DeleteRecording from '../DeleteRecording';
import AddToFavorites from '../AddToFavorites';
import ReactAudioPlayer from 'react-audio-player';
import './SingleRecording.css';
// import ReactPlayer from 'react';

const SingleRecording = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const recording = useSelector((state) => state.recording);
    const recordingUserId = recording.user_id
    // console.log(recording, '****************** Recording from SingleRecording Component*****')
    const user = useSelector(state => state.session.user)
    // console.log(user, "USER FROM SINGLE RECORDING COMPONENT********************")


    useEffect(() => {
        dispatch(renderOneRecording(parseInt(id)));
    }, [dispatch, id])

    return (
        <div>
            <h3>
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
                {console.log(recording, 'from single recording component')}
            </h3>
            <label htmlFor='recording-username'></label>
            <div name='recording-username'>
                <Link to={`/users/${recordingUserId}`}>
                    {recording.username}
                </Link>
            </div>
            <div>
                <ReactAudioPlayer
                    src={recording.blobURL}
                    controls
                />
            </div>
            <label htmlFor='delete-recording'></label>
            <div name='delete-recording'>
                {recording.username === user.username ?
                <div>
                    <DeleteRecording />
                </div>
                : null}
            </div>
            <div>
                <AddToFavorites recording_id={recording.id}/>
            </div>
            <div>
                <AddComment />
            </div>
            <div>
                <CommentsRecording />
            </div>
            {/* {console.log(recording, 'Recording in return of singlerecordingcomponent&&&&&&&&&&&&&&&&&&$$$$$$$$$*********')} */}
            {/* <ReactPlayer
            url={recording}
            className='react-player'
            playing
            width='50%'
            height='50%'
            /> */}
        </div>
    )
}
export default SingleRecording;
