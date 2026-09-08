import React from 'react'
import '../App.css'
import product_image from "../assets/HeadPhone.png"
import { useState } from "react";
const Product_Details = () => {
    let basePrice = 2000;
    let [Quantity,setQuantity] = useState(1)
    let [Price,setPrice] = useState(basePrice)
  return (
    <div id="content">
      <div >
        <h2>Product Details</h2>
        <img id="image" src={product_image}/>
        <label htmlFor='Price'>Price :</label>
        <input id='Price' value={Price} />

        
        <div>
            <label htmlFor='Quantity'>Quantity :</label>
            <input id='Quantity' value={Quantity}/>

        
            <button id="Increase"onClick = {()=>{
                setQuantity( Quantity+1);
                setPrice((Quantity+1)*basePrice);
            }}>+</button>
            <button  id="Decrease"onClick = {()=>{
                if(Quantity > 1){ setQuantity (Quantity-1);

                     setPrice((Quantity-1)*basePrice);
                }
               

               
            }}>-</button>
        </div>
      </div>

    </div>
  )
}

export default Product_Details