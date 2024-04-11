
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  seats: [], // Dữ liệu ghế xem phim
  selectedSeats: [],
  selectedSeatIds: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    updateSeat(state, action) {
      state.seats = action.payload;
    },
    setSelectedSeats(state, action) {
      state.selectedSeats = action.payload;
    },
    setSelectedSeatIds(state, action) {
      state.selectedSeatIds = action.payload;
    },
  },
});

export const { updateSeat, setSelectedSeats, setSelectedSeatIds } = movieSlice.actions;

export default movieSlice.reducer;
