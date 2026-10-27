import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="px-4 py-2">
      <h1 className="text-3xl py-6">{title}</h1>
      <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden pb-4">
        {movies &&
          movies.map((movie) => (
            <div key={movie.id} className="flex-shrink-0">
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default MovieList;
