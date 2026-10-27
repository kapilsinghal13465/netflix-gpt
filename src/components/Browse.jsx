import { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div className="m-0 p-0">
      <Header />
      {/*
        MainContainer
          - VideoBackground
          - VideoTitle
        SecondaryContainer
         - MovieList * n
            - Movie cars * n
      */}
      <MainContainer/>
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
