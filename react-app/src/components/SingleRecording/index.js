import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

    useEffect(() => {
        dispatch(renderOneRecording(parseInt(id)));
    }, [dispatch, id])

    return (
        <div>
            {recording.title}
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
