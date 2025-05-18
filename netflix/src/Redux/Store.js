import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieSlice from "./movieSlice";
import searchResultReducer from './searchResults';
import videoPlayerReducer from './videoPlayer';

const store = configureStore({
    name: "Store",
    reducer: {
        app: userReducer,
        movies: movieSlice,
        search_results: searchResultReducer,
        video_player: videoPlayerReducer
    },
});

export default store;