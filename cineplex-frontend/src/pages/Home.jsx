import React from 'react'
import CardCarousel from '../components/ui/CardCarousel'
import { carouselHome } from '../constants/constants'
function Home() {
  return (
   <>
   <section>
    <div className="min-h-screen bg-black text-white">
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Trending Movies</h1>
        <CardCarousel movies={carouselHome} />
      </div>

     
    </div>
   </section>
   </>
  )
}

export default Home