import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteOneFavorite, getUsersFavorites } from '../../store/favorite';

const FavoriteDelete = ({id}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector(state => state.session.user);

    const deleteAFavorite = async(e) => {
        e.preventDefault();
        dispatch(deleteOneFavorite(id));
        history.puah(`/users/${user.id}`);
    };

    return (
        <div>
            <label htmlFor='delete-button-single-favorite'></label>
                <button
                onClick={deleteAFavorite}
                name='delete-button-single-favorite'
                className='delete-button'>
                    Delete Favorite
                </button>
        </div>
    )
};

export default FavoriteDelete;
