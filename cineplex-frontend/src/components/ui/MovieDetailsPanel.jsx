import React from 'react'
import Button from './Button'
function MovieDetailsPanel({ movie, onClose, mode = "explore" }) {
  return (
    <div className="h-full relative overflow-hidden bg-white/10">

      <img
        src={movie.image || movie.poster}
        className="absolute inset-0 w-full h-full object-cover blur-xl opacity-30"
      />

      <div className="relative p-6 flex flex-col gap-4 text-white h-full">
        <button onClick={onClose} className="self-end text-xl">✕</button>

        <p className="text-xl font-bold text-gray-300">{movie.title}</p>
        <p className="text-sm text-gray-300">{movie.description}</p>

        <div className="mt-auto flex gap-3">
          {mode === "explore" && (
            <button className="flex-1 text-gray-400 border rounded-2xl py-2 ">
              + Add to Watchlist
            </button>
          )}

          {mode === "watchlist" && (
            <>
               <button className="flex-1 text-gray-400 border rounded-2xl py-2 ">
                ✓ Mark as Watched
              </button>
               <button className="flex-1 text-gray-400 border rounded-2xl py-2 ">
                Remove
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default MovieDetailsPanel
