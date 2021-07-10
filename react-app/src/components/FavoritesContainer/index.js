import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersFavorites } from '../../store/favorite';
import FavoriteDelete from '../FavoriteDelete';
import uuid from "node-uuid";
import './FavoritesContainer.css';

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
            <div className='container-recordings'>
                <h2 className='container-headline'>
                    {`${userPage.username}'s`} Favorites
                </h2>
                <label htmlFor='user-favorites'></label>
                <div className='container-contents'>
                    {favorites?.map(favorite => (
                        <div name='user-favorites' className='container' key={uuid()}>
                            <Link className='container-items' to={`/favorite/${favorite.id}`}>{favorite.name}</Link>
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
        </div>
    )
}
export default FavoritesContainer;
