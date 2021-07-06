import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { renderOneRecording } from '../../store/recording';
import AddComment from '../AddComment';
import CommentsRecording from '../CommentsRecording';
import DeleteRecording from '../DeleteRecording';
import ReactAudioPlayer from 'react-audio-player';
// import ReactPlayer from 'react';

const SingleRecording = () => {

    const dispatch = useDispatch();
    const {id} = useParams();
    const recording = useSelector((state) => state.recording);
    const recordingUserId = recording.user_id
    // console.log(recording.user_id, '****************** Recording userIDfrom SingleRecording Component*****')
    const user = useSelector(state => state.session.user)
    console.log(user, "USER FROM SINGLE RECORDING COMPONENT********************")


    useEffect(() => {
        dispatch(renderOneRecording(parseInt(id)));
    }, [dispatch, id])

    return (
        <div>
            <h2>
                {recording.title}
                <div>
                {recording.category}
                </div>
                {/* {console.log(recording, 'from single recording component')} */}
            </h2>
            <div>
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
            <div>
                {recording.username === user.username ?
                <div>
                    <DeleteRecording />
                </div>
                : null}
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
