import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { deleteRecording } from '../../store/recording';

const DeleteRecording = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const history = useHistory();
    // const recording = useSelector(state => state.recording);
    const user = useSelector(state => state.session.user);

    const deleteARecording = async(e) => {
        e.preventDefault();
        dispatch(deleteRecording(parseInt(id)));
        history.push(`/users/${user.id}/recordings`);
    };

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
}

export default DeleteRecording;
