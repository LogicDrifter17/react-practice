import React from 'react'
import {useParams,Link} from "react-router-dom"
import products from '../Data/data'
import { useContext } from 'react'
import { context } from '../App'

const ProductDetails = () => {
let {id} = useParams()
let {CartId,setCartId} = useContext(context);

  return (
     <div id = "Content">{
       products.map((element)=>{
          if(element.id == id){
            return (
             
        <div key={id}>
                <h1>{element.name}</h1>
                <p>{element.price}</p>
                <p>category:{element.category}</p>
                <p>{element.description}</p>
                <Link to={`/Cart`}><button onClick={()=>{
                    if( !CartId.includes(element.id)){
                        setCartId([...CartId,element.id])
                        console.log([...CartId,element.id]);
                    }
                   
                }}>Add to Cart</button></Link>      
        </div>

        )
          }
        
      })
           
    }
    </div>
  )
}

export default ProductDetails