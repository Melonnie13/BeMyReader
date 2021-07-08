import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { renderOneFavorite } from '../../store/favorite';
import FavoriteDelete from '../FavoriteDelete';

const SingleFavorite = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const favorite = useSelector(state => state.favorite);
    // console.log(favorite.recordings, "FAVORITE.RECORDINGS FROM SINGLE FAVORITE COMPONENT*********")
    const favoriteUserId = favorite.user_id

    const recordings = favorite.recordings
    console.log(recordings, 'RECORDINGS FROM SINGLE FAVE COMP')

    // const titles = favorite.recording.title



    const user = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(renderOneFavorite(parseInt(id)));
    }, [dispatch, id])



    return (

        <div>
            <h3>
                <label htmlFor='favorite-name'></label>
                <div name='favorite-name'>
                    {favorite.name}
                </div>
            </h3>
            <label htmlFor='delete-favorite'></label>
            <div name='delete-favorite'>
                {favorite.username === user.username ?
                <div>
                    <FavoriteDelete />
                </div>
                : null}
            </div>
            <label htmlFor='favorite-username'></label>
            <div name='favorite-username'>
                <Link to={`/users/${favoriteUserId}`}>
                    {favorite.username}
                </Link>
            </div>
            <label htmlFor='favorite-titles'></label>
            <div>
                {recordings?.map(recording => (
                    <div name='favorite-titles' className='container' key={recording.id}>
                    <Link to={`/recording/${recording.id}`}>{recording.title}</Link>
                    {/* <div>
                        {favorite.user_id === user.id ?
                        <div>
                            <RemoveRecording id={recording.id}/>
                        </div>
                        : null
                        }
                    </div> */}
                    </div>
                ))}
            </div>
        </div>
    )
};

export default SingleFavorite;
