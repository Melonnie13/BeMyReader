import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './SearchResults.css';

const SearchResults = ({category}) => {

    const recordings = useSelector(state => Object.values(state.recording))
    // console.log(recordings, 'RECORDINGS FROM SEARCH RESULTS**********&&&&&&&&&&!!!!!!!!!!!')
    console.log(category, 'CATEGORY FROM SEARCH RESULTS*******************')
    // const [error, setError] = useState('')

    let filteredRecs = recordings.filter(recording => {
        if (recording.category === category) return recording
    //  console.log(recording.category, '$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
    });

    // if (!filteredRecs.length){
    // }

        return (
            <>
                <div className='container-recordings'>
                    <label htmlFor='search-results'></label>
                    {filteredRecs &&
                    <div name='search-results' className='container'>
                        {filteredRecs.length ? filteredRecs.map(recording => (
                            <Link to={`/recording/${recording.id}`} key={recording.id}><div>{recording.title}</div></Link>
                        )) : "Category Not Found"}
                    </div>
                    }
                </div>
            </>
        )
};

export default SearchResults;
