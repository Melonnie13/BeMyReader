import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../store/comment';
import './AddComment.css';

const AddComment = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const recording = useSelector(state => state.recording);
    // console.log('RECORDING FROM ADD COMMENT COMPONENT', recording)

    const [body, setBody] = useState('');

    const postComment = async (e) => {
        e.preventDefault();
        if(body === ''){
            alert("Field cannot be blank")
        } else {
            const formData = new FormData();
            formData.append('body', body);
            formData.append('recording_id', recording.id);
            formData.append('user_id', user.id);

            dispatch(addComment(formData));
            setBody('');

        }

    };

    // useEffect(() => {
    //     dispatch(renderRecordingComments(id))
    // }, [dispatch]);

    return (

        <div id='comment-form-container'>
            <form className='comment-input-form' onSubmit={postComment}>
                <label htmlFor='add-comment'></label>
                <textarea
                name='add-comment'
                className='comment-form-input'
                placeholder='Comment'
                onChange={(e) => setBody(e.target.value)}
                value={body}/>
                    <div>
                        <label htmlFor='submit-button'></label>
                        <button type='submit' id='comment-button' name='submit-button'>
                            Add Comment
                        </button>
                    </div>
            </form>
        </div>
    )
};

export default AddComment;
