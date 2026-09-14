import React from 'react'
import products from '../Data/data'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    
    <div id="Card">
{
    products.map((element)=>{
        return (<div key ={element.id}>
           <h2>{element.name}</h2>
    <p>₹{element.price}</p>
    <Link to={`/ProductDetails/${element.id}`}>View</Link>
           
        </div>)
    })
}
    </div>

  )
}

export default Products