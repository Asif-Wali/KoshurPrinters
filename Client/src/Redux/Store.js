import {reducer} from './AppReducer/Reducer.js'
import {legacy_createStore} from "redux"
import {initialState} from './AppReducer/Reducer.js'

const store = legacy_createStore(reducer, initialState);

export { store };