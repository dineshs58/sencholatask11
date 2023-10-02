import React from 'react'
import Read from './Read'
import './home.css'
import { useNavigate } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa';
import img from './images/2.jpg'
const Home = () => {
    const navigate = useNavigate()
  return (
    <div className='container-fluid p-0 homehead'>
        <img src={img} alt="" className='homeimg' />
        <div className="container homecontainer">
            <div role='button' onClick={() => navigate('/create')} className='newuser container'>
            <FaPlus/>Add the new User details</div>
        <Read/>
        </div>
          
    </div>
  )
}

export default Home