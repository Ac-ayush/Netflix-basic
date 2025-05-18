import axios from "axios";
import { useState } from "react";
import {
  options,
  SEARCH_MOVIES_API_END_POINT,
} from "../../Utilities/constants";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQueryAndResults } from "../../Redux/searchResults";
import { setLoading } from "../../Redux/userSlice";
import MovieList from "../Media/Movie/MovieList";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const isLoading = useSelector((state) => state.app.isLoading);
  const { searchQuery: searchedMovieQuery, searchMovieResults } = useSelector((state) => state.search_results);

  console.log("searchedResults", searchMovieResults);
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    if (!searchQuery) return alert("Please enter your query");

    try {
      const response = await axios.get(
        `${SEARCH_MOVIES_API_END_POINT}?query=${searchQuery}&include_adult=false`,
        options
      ); //need changes & feature add

      const searchedResults = response.data;
      if (searchedResults) {
        dispatch(setSearchQueryAndResults({ searchQuery, searchedResults }));
      }
    } catch (error) {
      console.log("Error in handleSearchSubmit", error);
    } finally {
      setSearchQuery("");
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      <div className="flex justify-center pt-[10%] w-[100%] pb-20">
        <form onSubmit={handleSearchSubmit} className="w-[50%]">
          <div className="flex justify-between shadow-md border-2 p-2 border-gray-200 rounded-lg w-[100%]">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full outline-none rounded-md text-lg"
              type="text"
              placeholder="Search Movies..."
            />
            <button
              type="submit"
              className="bg-red-800 text-white rounded-md px-4 py-2 hover:cursor-pointer  hover:opacity-85"
            >
              {isLoading ? "Loading..." : "Search"}
            </button>
          </div>
        </form>
      </div>
      {searchMovieResults?.results?.length ? (
        <MovieList
          title={`Results for ${searchedMovieQuery}`}
          isSearchPage={true}
          movieList={searchMovieResults}
        />
      ) : (
        <span className="flex text-3xl justify-center text-center">
          Movie Not Found!!
        </span>
      )}
    </>
  );
};

export default SearchBox;
