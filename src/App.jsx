import MovieBooking from "./components/movieBooking/MovieBooking";
import bgMovie from "../public/bgMovie.jpg";

const App = () => {
  return (
    <div className="min-h-screen relative">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bgMovie})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(30%)",
        }}
      ></div>

      <MovieBooking></MovieBooking>
    </div>
  );
};

export default App;
