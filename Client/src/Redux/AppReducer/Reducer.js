import { TOGGLE_AUTH } from "./ActionType";
import { TOGGLE_ROLE } from "./ActionType";
import { TOGGLE_THEME } from "./ActionType";
import { SET_TOKEN } from "./ActionType";


export const initialState = {
    user:{},
    role:"user", 
    theme: "light",
    token:"",
    isAuth: false,
    products:[],
    cart:[],
    myOrders:[]
  }

  const reducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case  TOGGLE_AUTH:{
          return {...state, isAuth:payload};
        }
        case TOGGLE_ROLE:{
          return {
            ...state, role:payload
          }
        }
        case TOGGLE_THEME:{
          return {
            ...state, theme:payload
          }
        }
        case SET_TOKEN:{
            return {
              ...state, token:payload
            }
          }
      
        default:
          return state;
      }
    
};

export { reducer };

