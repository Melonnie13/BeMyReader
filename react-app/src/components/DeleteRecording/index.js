import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteRecording } from '../../store/recording';
import './DeleteRecording.css';

const DeleteRecording = ({id}) => {
    const dispatch = useDispatch();
    // const {id} = useParams();
    // console.log(id, 'ID FROM DELETE RECORDING!!!!!!!!!!!!!!!!!!!!!!!!')
    const history = useHistory();
    // const recording = useSelector(state => state.recording);
    // console.log(recording, 'recording from delete recording component!!!!!!!!!!')
    const user = useSelector(state => state.session.user);
    // console.log(user, '****************USER FROM DELETE RECORDING')
    // const userPage = useSelector(state => state.user);
    // console.log(userPage, 'pages user not the session user!!!!!!!!!!!!!!!!!!!!')

    // const user_id = user.id

    const deleteARecording = async(e) => {
        e.preventDefault();
        dispatch(deleteRecording(id));
        console.log(`deleted recording ${id}!!!!!!!!!!!!!!!!!!!!!!!`)
        history.push(`/users/${user.id}`);
    };

    // useEffect(() => {
    //     dispatch(getUsersRecordings((user_id)))
    // }, [dispatch, user_id])

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
