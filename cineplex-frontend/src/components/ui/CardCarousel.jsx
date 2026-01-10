import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function CardCarousel({ movies }) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (!containerRef.current || !cardRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const cardWidth = cardRef.current.offsetWidth + 16; 

      setVisibleCount(Math.floor(containerWidth / cardWidth));
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, movies.length - visibleCount);

  const next = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div ref={containerRef} className="relative overflow-hidden w-full">
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${index * (cardRef.current?.offsetWidth + 16 || 0)}px)`,
        }}
      >
        {movies.map((movie, i) => (
          <div
            ref={i === 0 ? cardRef : null}
            key={movie.id}
            className="min-w-45 sm:min-w-50 md:min-w-55 mx-2 bg-zinc-900 rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={movie.img}
              alt={movie.title}
              className="h-64 w-full object-cover"
            />
            <div className="p-3 text-center text-white font-semibold">
              {movie.title}
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      {index > 0 && (
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black z-10"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {/* Right Arrow */}
      {index < maxIndex && (
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black z-10"
        >
          <ChevronRight size={24} />
        </button>
      )}
    </div>
  );
}

export default CardCarousel;
