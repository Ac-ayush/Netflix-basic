import { useDispatch } from "react-redux";
import { TMDB_IMAGE_BASE_URL } from "../../../Utilities/constants";
import propTypes from "prop-types";
import { setCurrentPlayMovieId, setCurrentPlayMovieName, setOpenDialog } from "../../../Redux/videoPlayer";

const MovieCard = ({ posterPath, movieId, title, voteAverage }) => {
  if (!posterPath) return null;
  const dispatch = useDispatch();
  
  const handleMovieCardClick = () => {
    dispatch(setOpenDialog(true));
    dispatch(setCurrentPlayMovieId(movieId));
    dispatch(setCurrentPlayMovieName(title));
  }

  return (
    <div onClick={handleMovieCardClick} className="w-48 pr-2">
      <img src={`${TMDB_IMAGE_BASE_URL}/${posterPath}`} alt="movie-banner" />
      <div className="flex flex-col pt-3">
        <span className="text-blue-700 text-md">{title}</span>
        <span className="text-amber-300">{`${voteAverage.toFixed(1)}/10 rating`}</span>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
    posterPath: propTypes.string,
    movieId: propTypes.string,
    title: propTypes.string,
    voteAverage: propTypes.number
}

export default MovieCard;
