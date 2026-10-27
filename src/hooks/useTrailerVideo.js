import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useTrailerVideo = ({movieId}) => {
    const dispatch = useDispatch();
    
    /* fetch trailer video */
    useEffect(() => {
        getMovieTrailer();
    }, [movieId]);

  const getMovieTrailer = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      options,
    );
    const trailerList = await res.json();
    let trailer =
      trailerList?.results &&
      trailerList.results.find((item) => item.type === "Trailer");
    if (!trailer) {
      trailer = trailerList.results && trailerList.results[0];
    }

    dispatch(addTrailerVideo(trailer));
  };
};

export default useTrailerVideo;
