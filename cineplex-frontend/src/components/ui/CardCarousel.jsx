import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function CardCarousel({ movies }) {
  const [index, setIndex] = useState(0);
  const visibleCount = 6;
  const cardWidth = 220; 

  const next = () => {
    if (index < movies.length - visibleCount) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="relative overflow-hidden w-full">
      {/* Track */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${index * cardWidth}px)`,
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="min-w-50 mx-2 bg-zinc-900 rounded-xl overflow-hidden shadow-lg"
          >
                <div className="h-64 w-full object-cover">{movie.img}</div>
        
            <div className="p-3 text-center text-white font-semibold">
              {movie.title}
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black z-10"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black z-10"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}

export default CardCarousel;
