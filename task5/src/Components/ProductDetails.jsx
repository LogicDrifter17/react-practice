import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import products from '../Data/data'
import { context } from '../App'


            

const ProductDetails = () => {
    let{id} = useParams()
    let{cartid,dispatch}=useContext(context);

function reducer(state,action){
     switch(action.type){
      case "Add" :
         if(!state.includes(action.payload)){
               return [...state,action.payload];
         }
        else{
          return state;
        }  
        default :
          return state; 
                    }
      }

  return (
    <div id='Content'>{products.map((element)=>{
                 if(element.id == id){
                      return(<div key={element.id}><h1>{element.name}</h1>
                                    <p>₹{element.price}</p>
                                    <p>category : {element.category}</p>
                                    <p>{element.description}</p> 
                                    <Link to ='/Cart'><button onClick={dispatch({type : "Add",
                                                                                 payload : element.id}
                                    )}>
                                   
                                    Add to Cart</button></Link>
                            </div>)
                                  
                                    
                 }
              
    })}</div>
  )
}

export default ProductDetails