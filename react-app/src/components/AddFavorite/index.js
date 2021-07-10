import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { newFavorite } from  '../../store/favorite';
import './AddFavorite.css';

const AddFavorite = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);
    // const favorite = useSelector(state => state.favorite);

    const [name, setName] = useState('');
    const [formOpen, setFormOpen] = useState(false);

    const onPost = () => {
        setFormOpen(!formOpen);
    }

    const postFavorite = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('user_id', user.id);

        dispatch(newFavorite(formData));
        setName('');
        setFormOpen(false);
        history.push(`/users/${user.id}`);
    }

    return (
        <div>
            <label htmlFor='upload-favorite'></label>
            <button onClick={onPost}
            type='button'
            name='upload-favorite'
            className='button'
            > Create A Favorite List
            </button>
            {formOpen &&
                <form onSubmit={postFavorite}>
                    <label htmlFor='add-favorite'></label>
                    <textarea
                    name='add-favorite'
                    id='favorite-form-input'
                    placeholder='Name Favorite List'
                    onChange={(e) => setName(e.target.value)}
                    value={name}/>
                    <label htmlFor='submit-button'></label>
                    <button type='submit' className='button' name='submit-button'>
                        Submit
                    </button>
                </form>
            }
        </div>
    )
};

export default AddFavorite;
