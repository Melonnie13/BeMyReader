// import React, {useEffect, useState} from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router';
// import { getAllRecordingsSearch } from '../../store/recording';

// const Search = () => {
//     const dispatch = useDispatch();
//     const history = useHistory();

//     const [category, setCategory] = useState('');

//     const searchSubmit = (e) => {
//         e.preventDefault();
//         dispatch(getAllRecordingsSearch());
//         history.push('/search-results')

//     }

//     // const recordings = useSelector(state => state.recording)

//     // console.log(recordings, 'RECORDINGS from search component**************************')


//     return (
//         <div>
//             <form onSubmit={searchSubmit}>
//                 <label htmlFor='search-bar'></label>
//                 <input
//                 type='text'
//                 name='search-bar'
//                 placeholder='Search By Category'
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//                 >
//                 </input>
//                 <button type='submit'>Search</button>
//             </form>

//         </div>
//     )
// }

// export default Search;
