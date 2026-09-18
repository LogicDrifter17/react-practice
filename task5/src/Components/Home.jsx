import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div id='Content'><h1>Welcome to the mini Store</h1> 
    <Link to="/Products">click here </Link>
    <p>to move the Product Page</p></div>
   
  )
}

export default Home