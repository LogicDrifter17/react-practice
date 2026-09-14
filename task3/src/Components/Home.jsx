import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div id= "Content">
        <h1> Mini Store</h1>
        <h2>Welcome to Mini Store</h2>
        <h3>Browse the Products</h3>
        <Link to="/products">Products</Link>
    </div>
  )
}

export default Home