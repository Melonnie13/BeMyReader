import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReactMic } from 'react-mic';
import { uploadRecording } from '../../store/recording';
import './UploadRecording.css'

const UploadRecording = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);

    const

}
