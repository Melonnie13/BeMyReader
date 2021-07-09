import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { removeRecordingFavorite } from '../../store/favorite';
import './FavoriteRemove.css';

const FavoriteRemove = ({recording}) => {
    const dispatch = useDispatch();
    const {id} = useParams();
    // console.log(id, 'ID FROM REMOVE FAVORITE COMPONENT')
    const history = useHistory();
    // console.log(recording, '********************RECORDING FORM REMOVE FAVE COMP')
    const favoriteId = id
    const recordingId = recording.id

    const removeARecording = async(e) => {
        e.preventDefault();
        dispatch(removeRecordingFavorite(parseInt(favoriteId), recordingId))
    }

    return (
        <div>
            <button onClick={removeARecording}>remove</button>
        </div>
    )
};

export default FavoriteRemove;
