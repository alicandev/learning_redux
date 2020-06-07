import {AnyAction, CombinedState, createStore, Store} from 'redux'
import appReducer from './store/reducers'
import {ADD_DAY, SET_GOAL} from "./constants";
import {AppState} from "./types/stateTypes";

const store = createStore(appReducer);

const unsubscribeGoalLogger = store.subscribe(() => {
    console.log(store.getState().goal);
});

setInterval(
    () => store.dispatch({ 
        type: SET_GOAL, 
        payload: Math.floor(Math.random() * 100) 
    }), 250
);

setTimeout(
    () => unsubscribeGoalLogger(),
    3000
)
