import {createStore} from 'redux'
import appReducer from './store/reducers'
import initialState from './initialState'
import {ADD_DAY} from "./constants";

const store = createStore(appReducer, initialState);

console.log('initial state', store.getState())

store.dispatch({
    type: ADD_DAY,
    payload: {
        resort: "Ananke",
        date: "2013/12/7",
        powder: false,
        backcountry: true
    }
})

console.log('new state', store.getState())
