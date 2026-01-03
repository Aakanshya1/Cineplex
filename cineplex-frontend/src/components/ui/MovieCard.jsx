import React from 'react'

function MovieCard({movie}) {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />

      <div className="p-4">
        <h2 className="text-white font-semibold text-lg truncate">
          {movie.title}
        </h2>
        {movie.rating && (
          <p className="text-yellow-400 text-sm mt-1">⭐ {movie.rating}</p>
        )}
      </div>
    </div>
  )
}

export default MovieCard