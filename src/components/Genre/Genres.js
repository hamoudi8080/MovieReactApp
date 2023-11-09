import React from 'react'
import { useEffect } from 'react';
import axios from "axios";
const Genres = ({


    type,
    selectedGenres,
    setSelectedGenra,
    genres,
    setGenres,
    setPage,


}) => {
    const fetchGenres = async () => {
        
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        setGenres(data.genres);
      };
    
      useEffect(() => {
        fetchGenres();
    
        return () => {
          setGenres({}); // unmounting
        };
        // eslint-disable-next-line
      }, []);

  return (
    <div>
      genres
    </div>
  )
}

export default Genres
