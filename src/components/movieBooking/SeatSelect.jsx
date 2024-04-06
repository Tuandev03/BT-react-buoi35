import { useSelector } from "react-redux";
const SeatSelect = () => {
  const seats = useSelector((state) => state.movie.seats);

  // Lọc ra các ghế đã chọn và chưa chọn
  const selectedSeats = seats.flatMap((row) =>
    row.danhSachGhe.filter((seat) => seat.daDat)
  );
  const availableSeats = seats.flatMap((row) =>
    row.danhSachGhe.filter((seat) => !seat.daDat)
  );

  return (
    <div>
      <h3>Selected Seats:</h3>
      <ul>
        {selectedSeats.map((seat) => (
          <li key={seat.soGhe}>{seat.soGhe}</li>
        ))}
      </ul>
      <h3>Available Seats:</h3>
      <ul>
        {availableSeats.map((seat) => (
          <li key={seat.soGhe}>{seat.soGhe}</li>
        ))}
      </ul>
    </div>
  );
};

export default SeatSelect;
