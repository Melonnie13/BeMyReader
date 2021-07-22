import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteRecording, getUsersRecordings } from '../../store/recording';
import './DeleteRecording.css';

const DeleteRecording = ({id}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);
    const recordings = useSelector(state => state.recording)
    const user_id = user.id;

    const deleteARecording = async(e) => {
        e.preventDefault();
        dispatch(deleteRecording(id));
        dispatch(getUsersRecordings(user.id));
        history.push(`/users/${user.id}`);
    };

    useEffect(() => {
        dispatch(getUsersRecordings(user_id))
    }, [dispatch, user_id])

    useEffect(() => {
        // console.log('recordings change', recordings)
    }, [recordings])

    return (
        <div>
                <label htmlFor='delete-button-single-recording'></label>
                <button
                onClick={deleteARecording}
                name='delete-button-single-recording'
                className='delete-button'>
                    Delete Recording
                </button>
        </div>
    )
};

export default DeleteRecording;
