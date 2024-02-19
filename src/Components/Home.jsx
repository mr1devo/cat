import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'

const Home = () => {
const location=useLocation()
  return (
    
 <div>
  <Navbar></Navbar>
 <div className='homepage'>
   <h1>Hello {location.state.id} welcome to</h1>
   <h1>FOUND IT!</h1>
</div>
    </div>
  )
}

export default Home