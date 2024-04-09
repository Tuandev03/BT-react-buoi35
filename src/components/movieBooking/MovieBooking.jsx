import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSeat } from "../../redux/slice/movieSlice";
import Notification from "./Notification";
import seatsData from "../../data/seatsData";

const MovieBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedSeatIds, setSelectedSeatIds] = useState([]);
  const seats = useSelector((state) => state.movie.seats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateSeat(seatsData));
  }, []);

  const handleSeatClick = (row, seat) => {
    const selectedSeat = seatsData
      .find((r) => r.hang === row)
      .danhSachGhe.find((s) => s.soGhe === seat);

    if (selectedSeat && !selectedSeat.daDat) {
      const seatId = `${row}-${seat}`;
      if (!selectedSeats.some((s) => s.soGhe === selectedSeat.soGhe)) {
        setSelectedSeats([...selectedSeats, selectedSeat]);
        setSelectedSeatIds([...selectedSeatIds, seatId]);
      } else {
        setSelectedSeats(selectedSeats.filter((s) => s.soGhe !== seat));
        setSelectedSeatIds(selectedSeatIds.filter((id) => id !== seatId));
      }
    }
  };

  return (
    <div className="p-4 container relative z-10">
      <h1 className="text-orange-400 text-center text-6xl font-semibold">
        Đặt vé xem phim
      </h1>

      <div className="flex flex-col md:flex-row mt-14">
        <div className="w-full md:w-2/3 grid grid-cols-2 gap-4 ">
          {seats.map((row) => (
            <div key={row.hang} className="mb-4">
              <h3 className="text-white text-2xl font-bold mb-2">{row.hang}</h3>
              <div className="flex flex-wrap">
                {row.danhSachGhe.map((seat) => {
                  const seatId = `${row.hang}-${seat.soGhe}`;
                  return (
                    <div
                      key={seat.soGhe}
                      className={`seat p-2 m-1 rounded cursor-pointer ${
                        seat.daDat
                          ? "bg-gray-400"
                          : selectedSeatIds.includes(seatId)
                          ? "bg-green-500"
                          : "bg-gray-300"
                      }`}
                      onClick={() => handleSeatClick(row.hang, seat.soGhe)}
                    >
                      {seat.soGhe}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/3">
          <Notification selectedSeats={selectedSeats} />
        </div>
      </div>
    </div>
  );
};

export default MovieBooking;
