import {AppState} from "./types/stateTypes";
import storeFactory from './store/index';
import {ADD_DAY} from "./constants";

const initialState : AppState = localStorage['redux-store'] ? JSON.parse(localStorage['redux-store']) : {}

const saveState = () => localStorage['redux-store'] = JSON.stringify(store.getState());

const store = storeFactory(initialState);

store.subscribe(saveState);

store.dispatch({
    type: ADD_DAY,
    payload: {
        resort: "Mt Shashta",
        date: "2016/12/10",
        powder: false,
        backcountry: true
    }
});

store.dispatch({
    type: ADD_DAY,
    payload: {
        resort: "Squaw Valley",
        date: "2016/3/26",
        powder: false,
        backcountry: false
    }
});

store.dispatch({
    type: ADD_DAY,
    payload: {
        resort: "Mt Charlemagne",
        date: "2010/12/10",
        powder: true,
        backcountry: true
    }
});

