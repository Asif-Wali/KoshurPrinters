import {TOGGLE_THEME} from "./ActionType.js";
import {TOGGLE_AUTH} from "./ActionType.js";
import {TOGGLE_ROLE} from "./ActionType.js";
import { SET_TOKEN } from "./ActionType.js";
import { SET_USER } from "./ActionType.js";
export const ToggleTheme=(value)=>{
    return{type: TOGGLE_THEME, payload: value}
}

export const ToggleAuth=(value)=>{
    return{type: TOGGLE_AUTH, payload: value}
}

export const AssignRole=(value)=>{
    return{type: TOGGLE_ROLE, payload: value}
}

export const  AssignToken=(value)=>{
    return{type:SET_TOKEN, payload: value}
}


export const  SetUser=(value)=>{
    return{type:SET_USER, payload: value}
}