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
    // console.log(recording, '****************** from SingleRecording Component*****')
    const user = useSelector(state => state.user)
    console.log(user, "FROM SINGLE RECORDING COMPONENT********************")

    useEffect(() => {
        dispatch(renderOneRecording(parseInt(id)));
    }, [dispatch, id])

    return (
        <div>
            {recording.title}
            <div>
                <Link to={`/users/${user.id}`}>
                    {recording.username}
                </Link>
            </div>
            <ReactAudioPlayer
                src={recording.blobURL}
                controls
            />
            <div>
                <DeleteRecording />
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
