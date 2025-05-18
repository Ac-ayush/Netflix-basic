import { createSlice } from "@reduxjs/toolkit";

const videoPlayer = createSlice({
  name: "videoPlayer",
  initialState: {
    isOpenDialog: false,
    movie_id: "",
    movie_name: "",
  },
  reducers: {
    setOpenDialog: (state, action) => {
      state.isOpenDialog = action.payload;
    },
    setCurrentPlayMovieId: (state, action) => {
      state.movie_id = action.payload;
    },
    setCurrentPlayMovieName: (state, action) => {
      state.movie_name = action.payload;
    }
  }
});

export const { setOpenDialog, setCurrentPlayMovieId, setCurrentPlayMovieName } = videoPlayer.actions;
export default videoPlayer.reducer;
