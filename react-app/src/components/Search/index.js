import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { getAllRecordingsSearch } from '../../store/recording';

const Search = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [category, setCategory] = useState('');

    const searchSubmit = (e) => {
        e.preventDefault();
        dispatch(getAllRecordingsSearch());
        history.push('/search')

    }

    const SearchResults = ({category}) => {

        const recordings = useSelector(state => Object.values(state.recording))
        // console.log(recordings, 'RECORDINGS FROM SEARCH RESULTS**********&&&&&&&&&&!!!!!!!!!!!')
        // console.log(category, 'CATEGORY FROM SEARCH RESULTS*******************')



            return (
                <div>
                    {recordings.map(recording => (
                        recording.category === category ? <Link to={`/recording/${recording.id}`} key={recording.id}><div>{recording.title}</div></Link> : null
                    ))}

                </div>
            )
    }

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
            <SearchResults category={category}/>

        </div>
    )
}


export default Search;
