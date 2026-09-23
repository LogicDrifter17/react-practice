import {configureStore} from "@reduxjs/toolkit"
import CounterReducer from "./CounterSlice.js"
const Store = configureStore({
    reducer : {
        Counter : CounterReducer
    }
})
export default Store;

