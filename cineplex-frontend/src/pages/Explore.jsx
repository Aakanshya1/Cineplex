import React, { useState } from 'react'
import Dropdown from '../components/ui/Dropdown'
import { genre, channels, ratings, sortby, allMovies } from '../constants/constants'
import MovieCard from '../components/ui/MovieCard'
import MovieDetailsPanel from '../components/ui/MovieDetailsPanel'
import { useNavigate } from 'react-router-dom'

function Explore() {
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
  <div className="flex flex-col w-3/4 pt-20">

    <div className="p-10 flex flex-col gap-6 sm:flex-row shrink-0">
      <Dropdown label="Genre" items={genre} onSelect={console.log} />
      <Dropdown label="Channel" items={channels} onSelect={console.log} />
      <Dropdown label="Rating" items={ratings} onSelect={console.log} />
      <Dropdown label="Sort By" items={sortby} onSelect={console.log} />
    </div>

    <div className="flex-1 overflow-y-auto px-10 pb-10">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {allMovies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={() => handleMovieClick(movie)}
          />
        ))}
      </div>
    </div>
  </div>

  <div className="hidden md:block w-1/4 sticky top-0 h-screen border-l border-white/10">
    {selectedMovie ? (
      <MovieDetailsPanel movie={selectedMovie} onClose={() => setSelectedMovie(null)}  mode="explore"/>
    ) : (
      <div className="h-full flex items-center justify-center text-gray-500">
        Select a movie
      </div>
    )}
  </div>
</section>

  )
}

export default Explore
