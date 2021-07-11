import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { renderRecordingComments } from '../../store/comment';
import './CommentsRecording.css';
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
        <div id='comment-container'>
            <div id='comment-page-container'>
                <label htmlFor='comments'></label>
                <div id='comment-container-items' name='comments'>
                    {comments.map(comment => (
                        <div key={comment?.id}>
                            {comment?.body}
                            <label htmlFor='comment-username'></label>
                            <Link name='comment-username' className='container-items'>{comment?.username}</Link>
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
        </div>
    )
};

export default CommentsRecording;
