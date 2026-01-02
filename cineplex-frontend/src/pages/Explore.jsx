import React from 'react'
import Dropdown from '../components/ui/Dropdown'
import {genre,channels} from '../constants/constants'
function Explore() {
  return (
    <>
    <section >
      <div className='p-20'>
        <div>
          <Dropdown label="Genre" items={genre} onSelect={(item) => console.log(item)} />
        </div>
        <div>
          <Dropdown label="Channel" items={channels} onSelect={(item) => console.log(item)} />
        </div>
        <div></div>

      </div>
    </section>
    </>
  )
}

export default Explore