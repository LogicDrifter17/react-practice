import React from 'react'
import products from '../Data/data'
import { context } from '../App'
import { useContext } from 'react'

const Cart = () => {
    let {cartid,dispatch} = useContext(context);
  return (
    <div id="Card">
        {
            products.map((element)=>{
                 if(cartid.includes(element.id)){
                      return(<div key={element.id}>
                             <h1>{element.name}</h1>
                             <p>₹{element.price}</p> 
                             <button onClick={()=>{
                                  return dispatch({type : "Remove",payload : element.id})
                             }}>Remove</button>

                              
                         </div>)

                 }
              
            })
        }
    </div>
  )
}

export default Cart