import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import SearchResults from '../SearchResults';
import { getAllRecordingsSearch } from '../../store/recording';
import './Search.css';

const Search = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [category, setCategory] = useState('');
    const [results, setResults] = useState(false);

    const searchSubmit = (e) => {
        e.preventDefault();
        dispatch(getAllRecordingsSearch());
        setResults(true);
        history.push('/search')
    }

    // const SearchResults = ({category}) => {

    //     const recordings = useSelector(state => Object.values(state.recording))
    //     // console.log(recordings, 'RECORDINGS FROM SEARCH RESULTS**********&&&&&&&&&&!!!!!!!!!!!')
    //     console.log(category, 'CATEGORY FROM SEARCH RESULTS*******************')
    //     // const [error, setError] = useState('')

    //     let filteredRecs = recordings.filter(recording => {
    //      if (recording.category === category) return recording
    //     //  console.log(recording.category, '$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
    //     });

    //     if (!filteredRecs.length){

    //     }

    //         return (
    //             <>
    //                 {filteredRecs &&
    //                 <div>
    //                     {filteredRecs.length ? filteredRecs.map(recording => (
    //                         <Link to={`/recording/${recording.id}`} key={recording.id}><div>{recording.title}</div></Link>
    //                     )) : "Category Not Found"}

    //                 </div>
    //                 }
    //             </>
    //         )
    // }

    return (
        <div>
            <form onSubmit={searchSubmit}>
                <label htmlFor='search-bar'></label>
                <input
                type='text'
                name='search-bar'
                placeholder='Search By Category'
                className='form-input'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                >
                </input>
                <button type='submit'>Search</button>
            </form>
            {results ?
                <SearchResults category={category}/>
            : null}

        </div>
    )
};

export default Search;
