import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";
import Genres from "../../components/Genre/Genres";

function Movies() {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumberOfPages] = useState(1);
  const [selectedGenres, setSelectedGenres ] = useState([]);
  const [genres, setGenres] = useState([]);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    );
    console.log(data);
    setContent(data.results);
    setNumberOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

  useEffect(() => {
    fetchMovies();
  }, [numOfPages]);


  return (
    <div>
      <span className="pageTitle">Movies</span>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.release_date}
              media_type="movie"
              vote_average={c.vote_average.toFixed(1)}
            />
          ))}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numberOfPages={numOfPages} />
      )}
    </div>
  );
}

export default Movies;
