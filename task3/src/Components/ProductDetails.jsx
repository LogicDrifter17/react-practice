import React from 'react'
import { Link, useParams } from 'react-router-dom'
import products from '../Data/data'


const ProductDetails = () => {
    let {id} = useParams()
  return (
    <div id='Content'>{products.map((element)=>{
                 if(element.id == id){
                    return(<div key = {id}>
                        <h1>{element.name}</h1>
                        <h2>{element.price}</h2>
                        <p>category : {element.category}</p>
                        <p>{element.description}</p>
                        <Link to = "/Cart"><button>Add to Cart</button></Link>
                        </div>)
                 } 
    })}</div>
  )
}

export default ProductDetails