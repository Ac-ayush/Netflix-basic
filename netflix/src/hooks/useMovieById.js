import axios from "axios";
import { options } from "../Utilities/constants";
import { useDispatch } from "react-redux";
import { setMainVideoDetails } from "../Redux/movieSlice";
import { useEffect } from "react";

const useMovieById = (movieId) => {
  const dispatch = useDispatch();

  //Too avoid unnecessary re-renders, we are using useEffect
  useEffect(() => {
    const getMoviesByID = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          options
        );

        const movieList = response.data?.results;
        const trailers = movieList.filter((item) => item.type === "Trailer");

        const trailer = trailers?.length > 0 ? trailers[0] : movieList[0];
        dispatch(setMainVideoDetails(trailer));
      } catch (error) {
        console.log(" Erro in useMovieById", error);
      }
    };

    getMoviesByID();
  }, []);
};

export default useMovieById;
