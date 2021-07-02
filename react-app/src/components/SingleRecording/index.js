import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { renderOneRecording } from '../../store/recording';

const SingleRecording = () => {

    const dispatch = useDispatch();
    const {id} = useParams();
    const recording = useSelector((state) => state.recording);

    return (
        <div>

        </div>
    )
}
