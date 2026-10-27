import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className=" bg-black text-white">
    <div className="-mt-48 relative z-20 pl-4">
      {/* 
      MovieList - Popular
        - Movie Cards * N
      MovieList - NowPlaying
      MovieList - Trending
      */}
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
    </div>
    </div>
  );
};

export default SecondaryContainer;
