import { SET_USER, TOGGLE_AUTH,TOGGLE_ROLE,TOGGLE_THEME, SET_TOKEN } from "./ActionType";

  const reducer = (state ,{ type, payload }) => {

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
        case SET_USER:{
            return {
              ...state, user:payload
            }
          }
        default:
          return state;
      }
    
};

export { reducer };

