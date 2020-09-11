import React from 'react'
import MovieCard from './MovieCard'
import './MovieList.css'

const MovieList = ({listMovies,nameSearch,ratingSearch}) => {
    return (
        <div className='list'>
            {listMovies.filter(
          (el) =>
            el.name.toLowerCase().includes(nameSearch.toLowerCase().trim()) &&
            el.rate >= ratingSearch
        ).map((movie,i)=>(
             <MovieCard key={i} movie={movie} />
            ))}
        </div>
    )
}

export default MovieList
