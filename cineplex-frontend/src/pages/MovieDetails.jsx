import { useParams } from "react-router-dom";
import { allMovies, dummyWatchlist } from "../constants/constants";

function MovieDetails() {
  const { id } = useParams();
  const movie =
    allMovies.find((m) => m.id === Number(id)) ||
    dummyWatchlist.find((m) => m.id === Number(id));

  if (!movie) return null;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 filter blur-md"
        style={{ backgroundImage: `url(${movie.image})` }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 text-white p-6 max-w-3xl mx-auto">
        <img
          src={movie.image}
          className="w-full h-100 object-cover rounded-xl mb-6 shadow-lg"
        />

        <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
        <p className="text-yellow-400 mb-2">⭐ {movie.rating}</p>
        <p className="text-gray-200 leading-relaxed mb-6">{movie.overview}</p>

        <button className="w-full bg-green-600 py-3 rounded hover:bg-green-700">
          + Add to Watchlist
        </button>
      </div>
    </div>
  );
}

export default MovieDetails;
