import React from 'react'
import {Link} from "react-router-dom"
import products from '../Data/data'
products
const Products = () => {
  return (
    <div id="Card">
         {
            products.map((element)=>{
                return(<div key={element.id}>
                      <h1>{element.name}</h1>
                      <p>₹{element.price}</p>
                      <Link to={`/ProductDetails/${element.id}`}>View</Link>
                </div>)
            })
         } 
    </div>
  )
}

export default Products