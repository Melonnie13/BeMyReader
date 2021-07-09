import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { updateComment, renderRecordingComments } from '../../store/comment';
import './CommentEdit.css';

const CommentEdit = ({comment}) => {

    const dispatch = useDispatch();
    const {id} = useParams();
    const history = useHistory();

    const [body, setBody] = useState('');
    const [formOpen, setFormOpen] = useState(false);

    const onUpload = () => {
        setFormOpen(true);
    }

    const updateNewComment = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('body', body);
        console.log(body, '***********************NEWCOMMENTBODY')
        dispatch(updateComment(formData, comment.id))
        setFormOpen(false)
        history.push(`/recording/${id}`)
    };

    useEffect(() => {
        dispatch(renderRecordingComments(id))
    }, [dispatch, id]);

    return (
        <div>
            <label htmlFor='edit-comment'></label>
            <button onClick={onUpload}
            type='button'
            name='edit-comment'
            className='comment-button'>Edit Comment</button>
            {formOpen && (
                <form onSubmit={updateNewComment}>
                    <label htmlFor='comment-edit-text'></label>
                    <textarea name='comment-edit-text' placeholder={comment.body}
                    onChange={(e) => setBody(e.target.value)}/>
                    <label htmlFor='comment-edit-button'></label>
                    <button type='submit' name='comment-edit-button' className='comment-button'>Submit</button>
                </form>
            )}

        </div>
    )
}

export default CommentEdit;
