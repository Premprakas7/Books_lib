import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <p className='text-[5rem] font-[800] italic' >Book Library</p>
     <div className='flex ml-[40%]'>
        <div>
        <Link to="/display">
            <button className='w-[8rem] h-[3rem] bg-[gray] rounded-full text-[white]'>
                Display
                </button>
                </Link>
            </div>
            <div>
        <Link to="/add">
            <button className='w-[8rem] h-[3rem] bg-[gray] rounded-full text-[white]'>
                Add
                </button>
                </Link>
            </div>
     </div>
    </div>
  )
}

export default Home
