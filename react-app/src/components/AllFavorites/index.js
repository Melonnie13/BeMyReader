import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllFavorites } from '../../store/favorite';

const AllFavorites = () => {
    const dispatch = useDispatch();
    // const user = useSelector(state => state.user);
    // console.log(user, 'USER FROM ALL FAVORITES COMPONENT')
    const favorites = useSelector(state => Object.values(state.favorite));
    // console.log(favorites, 'FAVORITES FROM ALL FAVORITES COMPONENT*********')

    useEffect(() => {
        dispatch(getAllFavorites());
    }, [dispatch])


    return (
        <div>
            {favorites.map(favorite => (
                <div key={favorite.id}>
                <Link to={`/users/${favorite.user_id}`}>
                {favorite.name}
                </Link>
                </div>
            ))}
        </div>
    )
};

export default AllFavorites;
