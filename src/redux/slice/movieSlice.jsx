// reducers/movieReducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  seats: [], // Dữ liệu ghế xem phim
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    updateSeat(state, action) {
      state.seats = action.payload;
    },
  },
});

export const { updateSeat } = movieSlice.actions;
export default movieSlice.reducer;
