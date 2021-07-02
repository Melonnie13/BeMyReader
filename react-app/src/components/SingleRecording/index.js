import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { renderOneRecording } from '../../store/recording';
import ReactAudioPlayer from 'react-audio-player';
import ReactPlayer from 'react';

const SingleRecording = () => {

    const dispatch = useDispatch();
    const {id} = useParams();
    const recording = useSelector((state) => state.recording.recordings);
    console.log(recording, '****************** from SingleRecording Component*****')
    const user = useSelector((state) => state.session.user);

    useEffect(() => {
        dispatch(renderOneRecording(Number(id)));
    }, [dispatch, id])

    return (
        <div>
            {recording.title}
            <ReactAudioPlayer
                src={recording.blob}
                controls
            />
            {console.log(recording.blob, 'Recording in return of singlerecordingcomponent&&&&&&&&&&&&&&&&&&$$$$$$$$$*********')}
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
