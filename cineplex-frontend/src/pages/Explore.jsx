import React from 'react'
import Dropdown from '../components/ui/Dropdown'
import {genre,channels,ratings,sortby,} from '../constants/constants'
import MovieCard from '../components/ui/MovieCard'
function Explore(){
  return (
    <>
    <section >
      <div className='p-20 flex flex-col gap-6 md:flex-row md:justify-start md:items-center'>
        <div>
          <Dropdown label="Genre" items={genre} onSelect={(item) => console.log(item)} />
        </div>
        <div>
          <Dropdown label="Channel" items={channels} onSelect={(item) => console.log(item)} />
        </div>
        <div>
          <Dropdown label="Rating" items={ratings} onSelect={(item) => console.log(item)} />
        </div>
        <div>
          <Dropdown label="Sort By" items={sortby} onSelect={(item) => console.log(item)} />
        </div>

      </div>
      <div>


      </div>
    </section>
    </>
  )
}

export default Explore