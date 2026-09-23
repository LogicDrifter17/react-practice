
import './App.css'
import {useDispatch, useSelector} from "react-redux"
import { decrement, increment, reset } from './Store/CounterSlice'


function App() {
    let count = useSelector((state)=>{
      return state.Counter.count
    })
    let dispatch =  useDispatch()

  return (
    <>
     <h1>Counter</h1>
     
     <p>{count}</p>
     <button onClick={()=>{
      return dispatch(increment());
     }}>Increase</button>
     <button onClick={()=>{
      return dispatch(decrement())
     }}>Decrease</button>

     
    </>
  )
}

export default App
