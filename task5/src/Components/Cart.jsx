import React from 'react'
import products from '../Data/data'
import { context } from '../App'
import { useContext } from 'react'

const Cart = () => {
    let {cartid,setcartid} = useContext(context);
  return (
    <div id="Card">
        {
            products.map((element)=>{
                 if(cartid.includes(element.id)){
                      return(<div key={element.id}>
                             <h1>{element.name}</h1>
                             <p>₹{element.price}</p> 
                             <button onClick={()=>{
                                 let updatedCartId = cartid.filter((id)=>{
                                    return id != element.id
                                 })
                                 setcartid(updatedCartId);
                             }}>Remove</button>

                              
                         </div>)

                 }
              
            })
        }
    </div>
  )
}

export default Cart