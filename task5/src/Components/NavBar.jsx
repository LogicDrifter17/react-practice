import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div id='NavBar'>
       <Link to="/">Home</Link>
       <Link to="/Products">Products</Link>
       <Link to="/Cart">Cart</Link>
    </div>
  )
}

export default NavBar