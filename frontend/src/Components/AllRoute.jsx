import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Display from '../Pages/Display'
import Addbook from '../Pages/Addbook'

const AllRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/display' element={<Display/>} />
            <Route path='add' element={<Addbook/>} />
        </Routes>
      
    </div>
  )
}

export default AllRoute
