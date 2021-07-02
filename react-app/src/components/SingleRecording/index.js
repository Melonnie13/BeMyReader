import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { renderOneRecording } from '../../store/recording';
import ReactAudioPlayer from 'react-audio-player';

const SingleRecording = () => {

    const dispatch = useDispatch();
    const {id} = useParams();
    const recording = useSelector((state) => state.recording.recordings);
    console.log(recording, '*********** from SingleRecording Component*****')
    const user = useSelector((state) => state.session.user);

    useEffect(() => {
        dispatch(renderOneRecording(Number(id)));
    }, [dispatch, id])

    return (
        <div>
            {recording.title}
            <ReactAudioPlayer
                src={recording.audio}
                controls
                // style={audioExists ? { display: 'block' } : { display: 'none' }}
            />

        </div>
    )
}
export default SingleRecording;
