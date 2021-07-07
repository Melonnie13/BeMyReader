import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { setOneFavorite } from '../../store/favorite';

const AddToFavorites = ({recording_id}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {id} = useParams();

    const favorites = useSelector(state => state.favorite);
    const user = useSelector(state => state.session.user);

    const [formOpen, setFormOpen] = useState('')



    return (
        <div>
            <button onClick={formOpen}>
                Add To Favorites
            </button>

        </div>
    )
};

export default AddToFavorites;
