import React, { useState } from 'react'
import { dummyWatchlist } from '../constants/constants'
import MovieCard from '../components/ui/MovieCard'
import MovieDetailsPanel from '../components/ui/MovieDetailsPanel'
import { useNavigate } from 'react-router-dom'

function Watchlist() {
  const [selectedMovie, setSelectedMovie] = useState(null)
  const navigate = useNavigate()

  const handleMovieClick = (movie) => {
    if (window.innerWidth < 768) {
      navigate(`/movie/${movie.id}`)
    } else {
      setSelectedMovie(movie)
    }
  }

  return (
    <section className="h-screen bg-black text-white flex">
      {/* LEFT */}
      <div className="flex flex-col w-3/4">

        <div className="p-10 shrink-0">
          <h1 className="text-3xl font-bold">My Watchlist</h1>
        </div>

        <div className="flex-1 overflow-y-auto px-10 pb-10">
          {dummyWatchlist.length === 0 ? (
            <p className="text-gray-400">Your watchlist is empty.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {dummyWatchlist.map(movie => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  showMenu
                  onClick={() => handleMovieClick(movie)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* RIGHT */}
      <div className="hidden md:block w-1/4 sticky top-0 h-screen border-l border-white/10">
        {selectedMovie ? (
          <MovieDetailsPanel movie={selectedMovie} onClose={() => setSelectedMovie(null)}  mode="watchlist" />
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500">
            Select a movie
          </div>
        )}
      </div>
    </section>
  )
}

export default Watchlist
