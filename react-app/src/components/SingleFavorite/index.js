import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { renderOneFavorite } from '../../store/favorite';
import FavoriteDelete from '../FavoriteDelete';

const SingleFavorite = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const favorite = useSelector(state => state.favorite);
    console.log(favorite.recording, "FAVORITE FROM SINGLE FAVORITE COMPONENT*********")
    const recordingTitles = favorite.title
    console.log(recordingTitles, 'RECORDING TITLES FROM SINGLE FAVORITE____________')
    const recordingIds = favorite.recording_id
    console.log(recordingIds, "**************RECORDING IDS")
    const favoriteUserId = favorite.user_id

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
            <label htmlFor='favorite-username'></label>
            <div name='favorite-username'>
                <Link to={`/users/${favoriteUserId}`}>
                    {favorite.username}
                </Link>
            </div>
            <label htmlFor='delete-favorite'></label>
            <div name='delete-favorite'>
                {favorite.username === user.username ?
                <div>
                    <FavoriteDelete />
                </div>
                : null}
            </div>
            {/* <label htmlFor='favorite-recordings'></label>
            {recordingTitles.map(title => (
                <div name='favorite-recordings'>
                    <Link to={recordingIds.map(recordingId => (
                        `${recordingId}`
                    ))}></Link>
                    {title}
                </div>
            ))} */}
        </div>
    )
};

export default SingleFavorite;
