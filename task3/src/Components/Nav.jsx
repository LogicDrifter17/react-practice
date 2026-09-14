import React from 'react'
import { Link } from 'react-router-dom'

const  Nav = () => {
  return (
    <div id='NavBar'>
        <Link to="/">Home</Link>
        <Link to="/Products">products</Link>
        <Link to="/Cart">Cart</Link>

    </div>
  )
}

export default  Nav