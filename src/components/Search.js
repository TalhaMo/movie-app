import React from 'react'
import Rating from './Rating'
import './Search.css'

const Search = ({setNameSearch,ratingSearch,setRatingSearch}) => {
    return (
        <div className='search'>
            <input type='text' placeholder='search...' onChange={e=>setNameSearch(e.target.value)}/>
            <Rating rate={ratingSearch} setRatingSearch={setRatingSearch} className='rate'/>
        </div>
    )
}

export default Search
