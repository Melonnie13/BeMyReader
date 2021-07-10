import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { removeRecordingFavorite } from '../../store/favorite';
import './FavoriteRemove.css';

const FavoriteRemove = ({recording}) => {
    const dispatch = useDispatch();
    const {id} = useParams();
    // console.log(id, 'ID FROM REMOVE FAVORITE COMPONENT')
    // console.log(recording, '********************RECORDING FORM REMOVE FAVE COMP')
    const favoriteId = id
    const recordingId = recording.id

    const removeARecording = async(e) => {
        e.preventDefault();
        dispatch(removeRecordingFavorite(parseInt(favoriteId), recordingId))
    }

    return (
        <div id='fave-rem-container'>
            <button className='delete-button' id='fave-rem' onClick={removeARecording}>remove</button>
        </div>
    )
};

export default FavoriteRemove;
