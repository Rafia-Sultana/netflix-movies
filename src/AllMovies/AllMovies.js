import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import List from '../list/List'
const AllMovies = () => {
    const [movies, setMovies] = useState([]);
    const [faveMovies, setFaveMovies] = useState([]);

    useEffect(() => {
      get();
    }, []);
    const url = 'https://image.tmdb.org/t/p/w300/';
    async function get() {
      const res = await fetch(
        'http://cw-api.eu-west-3.elasticbeanstalk.com/movied/discover'
      );
      const jsonData = await res.json();
      setMovies(jsonData);
    }
 
    return (
        <div>
        <h1 className="font-bold text-2xl">Movies</h1>
        <div className="flex overflow-x-scroll">
          {movies.map((movie) => (
            <List
              key={movie.id}
              movie={movie}
              className="p-5 border border-indigo-100 rounded hover:bg-blue-600 text-white "
              setFaveMovies={setFaveMovies}
              faveMovies={faveMovies}
            >
          </List>
          ))}
          
        </div>


        <h1 className="font-bold text-2xl">Fave List</h1>
        <div className="flex overflow-x-scroll">
          {faveMovies.map((movie) => (
            <List
              key={movie.id}
              movie={movie}
              className="p-5 border border-indigo-100 rounded hover:bg-blue-600 text-white "
              setFaveMovies={setFaveMovies}
              faveMovies={faveMovies}
            >
          </List>
          ))}
          
        </div>
        </div>
    );
};

export default AllMovies;