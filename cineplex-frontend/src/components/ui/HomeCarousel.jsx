import React from 'react'
import { useState,useEffect,useRef } from 'react'
import { ChevronLeft, ChevronRight,Play} from 'lucide-react'

function HomeCarousel({movies, interval = 5000}) {
    const [index, setIndex] = useState(0);
      const touchStart = useRef(0);
    const next = () => {
        setIndex((prev) => (prev + 1) % movies.length);
    }
    const prev = () => {
        setIndex((prev) => (prev - 1 + movies.length) % movies.length);
    }
     useEffect(() => {
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [index]);

  const handleTouchStart = (e) => (touchStart.current = e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    const delta = touchStart.current - e.changedTouches[0].clientX;
    if (delta > 50) next();
    if (delta < -50) prev();
  };
  return (
    <>
     <div
      className="relative h-screen border"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {movies.map((movie, i) => (
        <div
          key={movie.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
            <img
  src={movie.img}
  alt={movie.title}
  className="w-full h-full object-cover"
/>

          

          <div className="absolute inset-0  text-white  bg-linear-to-r from-black/80 via-black/40 to-transparent flex items-center">
            <div className=" max-w-xl p-3 ml-20  text-white space-y-10">
              <h1 className="text-5xl font-bold bebas">{movie.title}</h1>
              {/* <p className="opacity-80 line-clamp-4">{movie.overview}</p> */}
              <button className="flex items-center gap-2 px-5 py-3 bg-red-600 rounded hover:bg-red-700">
                <Play size={18} /> Watch Trailer
              </button>
            </div>
          </div>
        </div>
      ))}

      <button onClick={prev} className="absolute left-1 top-1/2 z-20 p-3 bg-black/50 rounded-full">
        <ChevronLeft className="text-white" size={32} />
      </button>
      <button onClick={next} className="absolute right-1 top-1/2 z-20 p-3 bg-black/50 rounded-full">
        <ChevronRight className="text-white" size={32} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {movies.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-red-500 scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default HomeCarousel