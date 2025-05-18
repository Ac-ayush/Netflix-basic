import { useSelector } from "react-redux";
import useMovieById from "../../../hooks/useMovieById";
import PropTypes from "prop-types";

const VideoBackround = ({ movieId, isSourceDialog }) => {
  useMovieById(movieId);
  const mainVideoDetails = useSelector((state)=> state.movies?.mainVideoDetails);
  const videoKey = mainVideoDetails?.key ?? "xcJtL7QggTI" ;

  return (
    <div className='w-[vw] overflow-hidden'>
      <iframe
        className={`${isSourceDialog ? 'w-150 h-100': 'w-screen aspect-video'}`}
        // height="800"
        src={`https://www.youtube.com/embed/${videoKey}?si=47jyvEduZkWqbDaT&autoplay=1&mute=1&rel=0`}
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </div>
  );
};

VideoBackround.propTypes = {
    movieId: PropTypes.number,
    isSourceDialog: PropTypes.bool
}

export default VideoBackround;
