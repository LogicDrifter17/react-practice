import React from 'react'
import products from '../Data/data'
import { context } from '../App'
import { useContext } from 'react'

const Cart = () => {
    let {CartId,setCartId} = useContext(context);
  return (
    <div id="Card">
        {
            products.map((element)=>{
                 if(CartId.includes(element.id)){
                      return(<div key={element.id}>
                             <h1>{element.name}</h1>
                             <p>₹{element.price}</p> 
                             <button onClick={()=>{
                                 let updatedCartId = CartId.filter((id)=>{
                                    return id != element.id
                                 })
                                 setCartId(updatedCartId);
                             }}>Remove</button>

                              
                         </div>)

                 }
              
            })
        }
    </div>
  )
}

export default Cart