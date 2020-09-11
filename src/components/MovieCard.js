import React from 'react';
import Rating from './Rating';
import './MovieCard.css';

const MovieCard = ({movie}) => {
    return (
        <div className="card">
        <div >
          <img src={movie.image} alt="poster" />
        </div>
        <div >
          <h4>{movie.name}</h4>
          <div >
          <h6>{movie.date}</h6>
          </div>
         <Rating rate={movie.rate} />
         
          <div >
            <a href="https://www.imdb.com/?ref_=nv_home">Read More</a>
          </div>
          <div className="card_right__button">
            <a href="https://www.imdb.com/?ref_=nv_home">WATCH TRAILER</a>
          </div>
        </div>
      </div>
    )
}

export default MovieCard
