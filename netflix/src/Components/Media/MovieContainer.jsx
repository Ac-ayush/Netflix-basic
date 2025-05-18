import { useSelector } from "react-redux";
import MovieList from "./Movie/MovieList";
import { useEffect, useState } from "react";

const MovieContainer = () => {
    const [movieData, setMovieData] = useState({});
    const movies = useSelector((state) => state.movies);
  
    useEffect(() => {
      setMovieData(movies);
    }, []);
  console.log(" ===> MovieContainer");
  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-10">
        <MovieList
          title={"Popular Movies"}
          movieList={movieData.popular_movies}
        />
        <MovieList
          title={"Now Playing"}
          movieList={movieData.now_playing_movies}
        />
        <MovieList
          title={"Top Rated Movies"}
          movieList={movieData.top_rated_movies}
        />
        <MovieList
          title={"Upcoming Movies"}
          movieList={movieData.upcoming_movies}
        />
      </div>
    </div>
  );
};

export default MovieContainer;
