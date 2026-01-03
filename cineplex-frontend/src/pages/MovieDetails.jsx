import { useParams, useNavigate, useLocation } from "react-router-dom";
import { allMovies, dummyWatchlist } from "../constants/constants";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const movie =
    allMovies.find((m) => m.id === Number(id)) ||
    dummyWatchlist.find((m) => m.id === Number(id));

  if (!movie) return null;

  const handleBack = () => {
    if (location.state?.from) {
      navigate(location.state.from);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 filter blur-md"
        style={{ backgroundImage: `url(${movie.image})` }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Back Button - Sticky top-left */}
      <button
        onClick={handleBack}
        className="fixed top-5 left-4 z-20  text-white px-4 py-2 rounded hover:bg-gray-700 transition"
      >
        ← Back
      </button>

      {/* Content */}
      <div className="relative z-10 text-white p-6 max-w-3xl mx-auto mt-24 space-y-4">
        <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
        <p className="text-yellow-400 mb-2">⭐ {movie.rating}</p>
        <p className="text-gray-200 leading-relaxed mb-6">{movie.overview}</p>

        <button className="w-full bg-green-600 py-3 rounded hover:bg-green-700 transition">
          + Add to Watchlist
        </button>
      </div>
    </div>
  );
}

export default MovieDetails;
