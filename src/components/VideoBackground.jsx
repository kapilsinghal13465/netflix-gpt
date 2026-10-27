import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {
     useTrailerVideo(movieId);
    
      // Safely fallback to the default video key if the trailer isn't loaded yet
      const trailerVideo = useSelector((store) => store.movies.trailer);
      const videoId = trailerVideo?.key || "OFaJzL83y0Q";

  return (
    <div className=" overflow-hidden">
      <div className="w-full">
      <iframe
      className="w-full aspect-video block"
        src={`https://www.youtube.com/embed/OFaJzL83y0Q?si=${videoId}&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
      </div>
    </div>
  );
};

export default VideoBackground;
