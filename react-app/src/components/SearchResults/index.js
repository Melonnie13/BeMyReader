import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getAllRecordingsSearch } from '../../store/recording';
import RecordingsContainer from '../RecordingsContainer';


const SearchResults = () => {// reverse these
    const dispatch = useDispatch();

    const recordings = useSelector(state => Object.values(state.recording))
    console.log(recordings, 'RECORDINGS FROM SEARCH RESULTS**********&&&&&&&&&&!!!!!!!!!!!')

    const Search = () => {
        const dispatch = useDispatch();
        const history = useHistory();

        const [category, setCategory] = useState('');

        const searchSubmit = (e) => {
            e.preventDefault();
            dispatch(getAllRecordingsSearch());
            history.push('/search-results')

        }

        // const recordings = useSelector(state => state.recording)

        // console.log(recordings, 'RECORDINGS from search component**************************')


        return (
            <div>
                <form onSubmit={searchSubmit}>
                    <label htmlFor='search-bar'></label>
                    <input
                    type='text'
                    name='search-bar'
                    placeholder='Search By Category'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    >
                    </input>
                    <button type='submit'>Search</button>
                </form>

            </div>
        )
    }

        return (
            <div>
                <Search />
                {recordings[0]?.title}
            </div>
        )
}

export default SearchResults;
