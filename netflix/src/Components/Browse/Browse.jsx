import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import MainVideoContainer from "../Media/MainContainer";
import MovieContainer from "../Media/MovieContainer";
import useGetNowPLayingMovies from "../../hooks/useNowPlayingMovies";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import usePopularMovies from "../../hooks/usePopularMovies";
import SearchBox from "../Search/SearchBox";

const Browse = () => {
  const userData = useSelector((state) => state.app.user);

  const isSearchBoxToggle = useSelector(
    (state) => state.movies.isSearchMovieToggle
  );
  const navigate = useNavigate();
  //custom hook
  useGetNowPLayingMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  usePopularMovies();

  useEffect(() => {
    if (!userData) {
      navigate("/");
    }
  }, []);

  if (!userData) return null;

  return (
    <div className="min-h-screen">
      <Header />
      {isSearchBoxToggle ? (
        <SearchBox/>
      ) : (
        <>
          <MainVideoContainer />
          <MovieContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
