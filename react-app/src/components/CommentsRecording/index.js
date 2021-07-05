import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { renderRecordingComments } from '../../store/comment';
import CommentDelete from '../CommentDelete';
import CommentEdit from '../CommentEdit';

const CommentsRecording = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    // const user = useSelector(state => state.session.user);
    const comments = useSelector(state => Object.values(state.comment));
    const user = useSelector(state => state.session.user);
    // console.log(comments, '%%%%%%%%%%%%%%%%%%COMMENTS FROM COMMENTSRECORDING COMPONENT')

    useEffect(() => {
        dispatch(renderRecordingComments(parseInt(id)))
    }, [dispatch, id]);

    return (
        <div>
            <label htmlFor='comments'></label>
            <div className='container' name='comments'>
                {comments.map(comment => (
                    <div key={comment?.id}>
                        {comment?.body}
                        <label htmlFor='comment-username'></label>
                        <div name='comment-username' id='comment-container-username'>
                            {comment?.username}
                        </div>
                        {comment?.user_id === user.id
                        ? <div>
                            <CommentDelete comment={comment} />
                            <CommentEdit comment={comment} />
                         </div>
                        : null
                        }
                    </div>
                ))}


            </div>
        </div>
    )
};

export default CommentsRecording;
