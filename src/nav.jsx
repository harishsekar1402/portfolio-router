import React from 'react'
import {Link} from 'react-router-dom';
import './nav.css';
function Menu() {
  return (
    <div className='nav'>
        <ul className='links'>
            <Link to='/home'><li>Home</li></Link>
            <Link to='/calc'><li>Calculator</li></Link>
            <Link to='/axios'><li>API</li></Link>
        </ul>
    </div>
  )
}

export default Menu