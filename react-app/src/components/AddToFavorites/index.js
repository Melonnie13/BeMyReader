import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setRecordingFavorite, getUsersFavorites } from '../../store/favorite';
import './AddToFavorites.css';

const AddToFavorites = ({recording_id}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const favorites = useSelector(state => Object.values(state.favorite));
    // console.log(favorites, 'FAVORITES FROM ADD TO FAVORITES COMPONENT')
    const user = useSelector(state => state.session.user);
    // console.log(user, '***********USER FROM ADD TO FAVE COMPONENT')

    const [formOpen, setFormOpen] = useState('');
    const [favorite, setFavorite] = useState('');

    const user_id = user.id

    useEffect(() => {
        dispatch(getUsersFavorites(user_id))
    }, [dispatch, user_id])

    const onUpload = () => {
        setFormOpen(!formOpen);
    };

    const addRecording = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('favorite_id', favorite);
        // console.log(favorite, '***********************favorite FROM FORMDATA IN addtofavorite COMPONENT')
        formData.append('recording_id', recording_id)
        dispatch(setRecordingFavorite(formData))
        dispatch(getUsersFavorites(user_id))
        history.push(`/users/${user.id}`)
    }



    return (
        <div>
            <label htmlFor='add-to-favorite'></label>
            <button onClick={onUpload}
            type='button'
            name='add-to-favorite'
            id='add-to-fave-button'>
                Add To Favorites
            </button>
            <div>
                {formOpen &&
                <form className='input-form' onSubmit={addRecording}>
                    <label htmlFor='favorite-select'></label>
                    <select
                    name='favorite-select'
                    className='form-input selector'
                    onChange={(e) => setFavorite(e.target.value)}
                    value={favorite.id}
                    >
                        <option default>Choose Your Favorite List</option>
                        {favorites.map(favorite => (
                            <option
                            key={favorite.id}
                            value={favorite.id}
                            >
                                {favorite.name}
                                {/* {console.log(favorite, '&&&&&&&&&&&&FAVORITE FROM RETURN ADD COMPONENT')} */}
                            </option>
                        ))}
                    </select>
                    <label htmlFor='fave-button'></label>
                    <button type='submit' name='fave-button' className='button'>Add</button>
                </form>
                }
            </div>
        </div>
    )
};

export default AddToFavorites;
