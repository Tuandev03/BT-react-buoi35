/* eslint-disable */
const Notification = ({ selectedSeats }) => {
  // Hàm tính tổng tiền
  const calculateTotalPrice = (selectedSeats) => {
    const totalPrice = selectedSeats.reduce((total, seat) => {
      return total + seat.gia;
    }, 0);
    return totalPrice.toLocaleString();
  };
  return (
    <div className="notification w-[600px] h-[800px]  overflow-y-auto  custom-scrollbar">
      <h1 className="text-white text-3xl font-bold">DANH SÁCH GHẾ BẠN CHỌN</h1>
      <div className="space-y-1 mt-6">
        <p className="flex items-center text-xl text-white font-semibold">
          <span className="w-[20px] h-[20px]  bg-gray-200 inline-block mr-2 "></span>
          Ghế chưa chọn
        </p>
        <p className="flex items-center text-xl text-white font-semibold">
          <span className="w-[20px] h-[20px] bg-green-500 inline-block mr-2">
            {" "}
          </span>{" "}
          Ghế đã chọn
        </p>
        <p className="flex items-center text-xl text-white font-semibold">
          <span className="w-[20px] h-[20px] bg-gray-400 inline-block mr-2">
            {" "}
          </span>{" "}
          Ghế đã được chọn
        </p>
      </div>
      {selectedSeats && selectedSeats.length > 0 ? (
        <div>
          <p className="text-white text-2xl font-bold mt-4">Đã chọn ghế:</p>
          <ul>
            {selectedSeats.map((seat, index) => (
              <li
                className="py-1 text-orange-400 text-2xl font-bold"
                key={index}
              >
                Ghế:{" "}
                <strong className="text-white font-medium">{seat.soGhe}</strong>
                , Giá tiền:{" "}
                <strong className="text-white font-medium">
                  {seat.gia.toLocaleString()} VND
                </strong>
              </li>
            ))}
          </ul>
          {/* Hiển thị tổng tiền */}
          <p className="text-2xl mt-4 text-white font-bold">
            Tổng tiền: {calculateTotalPrice(selectedSeats)} VND
          </p>
        </div>
      ) : (
        <p className="text-white text-2xl font-bold mt-4">
          Vui lòng chọn một ghế
        </p>
      )}
    </div>
  );
};

export default Notification;
