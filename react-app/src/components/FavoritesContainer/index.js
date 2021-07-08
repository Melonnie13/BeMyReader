import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersFavorites } from '../../store/favorite';
import FavoriteDelete from '../FavoriteDelete';

const FavoritesContainer = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const favorites = useSelector(state => Object.values(state.favorite));
    const userPage = useSelector(state => state.user);
    const user = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(getUsersFavorites(parseInt(id)))
    }, [dispatch, id])


    return (
        <div>
            <h2>
                {`${userPage.username}'s`} Favorites
            </h2>
            <label htmlFor='user-favorites'></label>
            <div>
                {favorites?.map(favorite => (
                    <div name='user-favorites' className='container' key={favorite?.id}>
                        <Link to={`/favorite/${favorite.id}`}>{favorite.name}</Link>
                        <div>
                            {userPage.id === user.id ?
                                <div>
                                    <FavoriteDelete id={favorite.id} />
                                </div>
                                : null
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default FavoritesContainer;
