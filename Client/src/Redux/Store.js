import {reducer} from './AppReducer/Reducer.js'
import {legacy_createStore} from "redux"
const savedstate=JSON.parse(localStorage.getItem("User"));
const DefaultState = {
    theme: "light",
    isAuth: false,
    products:[],
    cart:[],
    myOrders:[]
    
  }

const initialState={
    ...DefaultState,
    ...savedstate
}  
console.log(savedstate);

const store = legacy_createStore(reducer, initialState);

export { store };