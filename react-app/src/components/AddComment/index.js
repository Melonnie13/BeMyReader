import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../store/comment';

const AddComment = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const recording = useSelector(state => state.recording);
    // console.log('RECORDING FROM ADD COMMENT COMPONENT', recording.id)

    const [body, setBody] = useState('');

    const postComment = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('body', body);
        formData.append('recording_id', recording.id);
        formData.append('user_id', user.id);

        dispatch(addComment(formData));
        setBody('');
    };

    // useEffect(() => {
    //     dispatch(renderRecordingComments(id))
    // }, [dispatch]);

    return (

        <div>
            <form onSubmit={postComment}>
                <label htmlFor='add-comment'></label>
                <textarea
                name='add-comment'
                className='form-input'
                placeholder='Comment'
                onChange={(e) => setBody(e.target.value)}
                value={body}/>
                    <label htmlFor='submit-button'></label>
                    <button type='submit' className='button' name='submit-button'>
                        Add Comment
                    </button>
            </form>
        </div>
    )
};

export default AddComment;
