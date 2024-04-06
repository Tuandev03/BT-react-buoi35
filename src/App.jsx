import MovieBooking from "./components/movieBooking/MovieBooking";
import bgMovie from "../public/bgMovie.jpg";
const App = () => {
  return (
    <div className="h-screen relative">
      <div
        className="absolute inset-0 "
        style={{
          backgroundImage: `url(${bgMovie})`,
          backgroundSize: "cover", // Đảm bảo hình ảnh nằm đầy đủ trong phần tử
          backgroundPosition: "center", // Căn giữa hình ảnh
          filter: "brightness(30%)", //
        }}
      ></div>

      <MovieBooking></MovieBooking>
    </div>
  );
};

export default App;
