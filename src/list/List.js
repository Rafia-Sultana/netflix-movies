import React, { useState } from 'react';

const List = ({ movie, faveMovies, setFaveMovies }) => {
  const checkIfFave = (movie) => {
    return faveMovies.includes(movie);
  };
  const handleClick = (movie) => {
    if (checkIfFave(movie)) {
      setFaveMovies((prevState) => {
        const newFaves = prevState.filter((m) => m !== movie);
        return newFaves;
      })
    } else {
      setFaveMovies((prevState) => [...prevState, movie]);
    }
   
  };

  



  return (
    <div className='m-2'>
      <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} className='w-52'/>
      <p key={movie.id} className="text-black">
        {' '}
        {movie.title}{' '}
      </p>
      <button
        onClick={() => {
          handleClick(movie);
        }}
      >
      
        {checkIfFave(movie)  ? 'Remove' : 'Add'}
        

      </button>
    </div>
  );
};

export default List;
