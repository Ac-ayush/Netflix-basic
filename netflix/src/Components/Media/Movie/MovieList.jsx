import MovieCard from "./MovieCard";
import PropTypes from "prop-types";

const MovieList = (props) => {
  const { title, movieList, isSearchPage = false } = props;

  if (!movieList) return null;
  return (
    <div className="px-8 bg-black">
      {movieList?.results?.length && (
        <h1
          className={`${
            isSearchPage ? "text-black font-medium" : "text-white"
          } text-4xl py-3`}
        >
          {title}
        </h1>
      )}
      <div className="flex overflow-x-auto no-scrollbar cursor-pointer">
        <div className="flex items-center">
          {movieList?.results?.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                movieId={movie.id}
                posterPath={movie.poster_path}
                title={movie.title || 'Default Bro'}
                voteAverage={movie.vote_average}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  isSearchPage: PropTypes.bool,
  movieList: PropTypes.shape({
    results: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ),
  }),
};

export default MovieList;
