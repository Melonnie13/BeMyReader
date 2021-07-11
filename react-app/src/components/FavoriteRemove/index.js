import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { removeRecordingFavorite, renderOneFavorite } from '../../store/favorite';
import './FavoriteRemove.css';

const FavoriteRemove = ({recording}) => {
    const dispatch = useDispatch();
    const {id} = useParams();
    // console.log(id, 'ID FROM REMOVE FAVORITE COMPONENT')
    // console.log(recording, '********************RECORDING FORM REMOVE FAVE COMP')
    const favoriteId = parseInt(id)
    const recordingId = recording.id

    const removeARecording = async(e) => {
        e.preventDefault();
        dispatch(removeRecordingFavorite(favoriteId, recordingId))
    }

    useEffect(() => {
        dispatch(renderOneFavorite(favoriteId))
    }, [dispatch, favoriteId]);

    return (
        <div id='fave-rem-container'>
            <button className='delete-button' id='fave-rem' onClick={removeARecording}>remove</button>
        </div>
    )
};

export default FavoriteRemove;
