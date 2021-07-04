import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { deleteOneComment, renderRecordingComments } from '../../store/comment';

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
    }, [dispatch])

    return (

        <div>
            <label htmlFor='delete-button'></label>
            <button className='comment-button' name='delete-button' onClick={deleteComment}>
                Delete
            </button>
        </div>
    )
};

export default CommentDelete;
