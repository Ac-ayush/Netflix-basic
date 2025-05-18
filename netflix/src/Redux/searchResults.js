import { createSlice } from "@reduxjs/toolkit";

const searchResults =  createSlice({
    name: 'searchResults',
    initialState: {
        searchQuery: '',
        searchMovieResults: []
    },
    reducers: {
        setSearchQueryAndResults: (state, action) => {
            const {searchQuery, searchedResults} = action.payload;
            state.searchQuery = searchQuery;
            state.searchMovieResults = searchedResults;
        }
    }
});

export const { setSearchQueryAndResults } = searchResults.actions;
export default searchResults.reducer;