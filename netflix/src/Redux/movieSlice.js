import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState : {
        now_playing_movies : {},
        upcoming_movies : {},
        top_rated_movies : {},
        popular_movies : {},
        isSearchMovieToggle : false,
        mainVideoDetails : {}
    },
    reducers: { //actions
        setNowPlayingMovies : (state, action) => {
            state.now_playing_movies = action.payload;
        },
        setUpcomingMovies : (state, action) => {
            state.upcoming_movies = action.payload;
        },
        setTopRatedMovies : (state, action) => {
            state.top_rated_movies = action.payload;
        },
        setPopularMovies : (state, action) => {
            state.popular_movies = action.payload;
        },
        setSearchMovieToggle : (state) => {
            state.isSearchMovieToggle = !state.isSearchMovieToggle;
        },
        setMainVideoDetails : (state, action) => {
            state.mainVideoDetails = action.payload;
        }
    }
});

export const { setNowPlayingMovies, setUpcomingMovies, setTopRatedMovies, setPopularMovies, setSearchMovieToggle, setMainVideoDetails } = movieSlice.actions;
export default movieSlice.reducer;