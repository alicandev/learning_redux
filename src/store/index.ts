import {applyMiddleware, createStore} from 'redux';
import appReducer from './reducers';
import {AppState} from "../types/stateTypes";

const emptyState : AppState = {
    allSkiDays: [],
    goal: 0,
    resortNames: {fetching: false, suggestions: []},
    errorList: []
}

const consoleMessages = store => next => action => {
    let result;
    
    console.groupCollapsed(`dispatching action => ${action.type}`);
    console.log(`ski days:`, store.getState().allSkiDays.length);
    
    result = next(action);
    
    let { allSkiDays, goal, resortNames, errorList } : AppState = store.getState();
    console.log(`
    
        ski days: ${allSkiDays.length}
        goal: ${goal}
        fetching: ${resortNames.fetching}
        suggestions: ${resortNames.suggestions}
        errors: ${errorList.length}
        
    `);
    console.groupEnd();
    
    return result;
}

export default (initialState:AppState = emptyState) =>
    applyMiddleware(consoleMessages)(createStore)(appReducer, initialState)