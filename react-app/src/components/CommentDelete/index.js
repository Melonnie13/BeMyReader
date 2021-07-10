import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deleteOneComment, renderRecordingComments } from '../../store/comment';
import './CommentDelete.css';

const CommentDelete = ({comment}) => {
    const dispatch = useDispatch();
    const {id} = useParams();


    const comment_id = comment.id
    // console.log(comment.id, '&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&COMMENT FROM DELETE COMPONENT')

    const deleteComment = async(e) => {
        e.preventDefault();
        dispatch(deleteOneComment(comment_id))
    };

    useEffect(() => {
        dispatch(renderRecordingComments(id))
    }, [dispatch, id])

    return (

        <div>
            <label htmlFor='delete-button'></label>
            <button className='button' name='delete-button' onClick={deleteComment}>
                Delete
            </button>
        </div>
    )
};

export default CommentDelete;
