import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReactMic } from 'react-mic';
import { ReactAudioPlayer } from 'react-audio-player';
import { uploadRecording } from '../../store/recording';
import './UploadRecording.css'

const UploadRecording = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);

    const [record, setRecord] = useState(false);
    const [recordingBlob, setRecordingBlob] = useState('');
    const [audio, setAudio] = useState(false);
    const [formOpen, setFormOpen] = useState(false);

    const startRecording = () => {
        setRecord(true);
    }
    const stopRecording = () => {
        setRecord(false);
    }
    const onStop = blob => {
        setRecordingBlob(blob)
        setAudio(true);
    }
    const onDelete = () => {
        setRecordingBlob('');
        setAudio(false);
    }
    const onUpload = () => {
        setFormOpen(!formOpen);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append();
    }



}
