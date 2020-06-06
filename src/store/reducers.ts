import {Action, AnyAction, CombinedState, combineReducers, Reducer} from "redux";
import {AppState, ErrorList, Goal, SkiDay, ResortNames} from "../types/stateTypes";
import {ErrorListAction, GoalAction, SkiDayAction, ResortNamesAction} from "../types/actionTypes";
import {
    ADD_DAY,
    ADD_ERROR, CANCEL_FETCHING, CHANGE_SUGGESTIONS,
    CLEAR_ERROR,
    CLEAR_SUGGESTIONS,
    FETCH_RESORT_NAMES,
    REMOVE_DAY,
    SET_GOAL
} from "../constants";
import {
    AllSkiDaysReducer,
    ErrorListReducer,
    FetchingReducer,
    GoalReducer, ResortNamesReducer, SingleReducer,
    SkiDayReducer,
    SuggestionsReducer
} from "../types/reducerTypes";

export const goal : GoalReducer = (state = { days: 10 }, action) =>
    action.type === SET_GOAL ? action.payload : state

export const skiDay : SkiDayReducer = (state = null, action ) =>
    action.type === ADD_DAY ? action.payload : state

export const errorList : ErrorListReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_ERROR: 
            return [ ...state, action.payload ]
        case CLEAR_ERROR: 
            return state.filter((message, i) => i !== action.payload)
        default: 
            return state
    }
}

export const allSkiDays : AllSkiDaysReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_DAY:
            const dayBookedAlready = state.some(skiDay => skiDay.date === action.payload.date)
            return dayBookedAlready ? state : [ ...state, skiDay(null, action) ]
        case REMOVE_DAY:
            return state.filter(skiDay => skiDay.date !== action.payload)
        default:
            return state
    }
}

export const fetching : FetchingReducer = (state = false, action) => {
    switch (action.type) {
        case FETCH_RESORT_NAMES: 
            return true
        case CANCEL_FETCHING: 
            return false
        case CHANGE_SUGGESTIONS: 
            return false
        default: 
            return state
    }
}

export const suggestions : SuggestionsReducer = (state = [], action) => {
    switch (action.type) {
        case CLEAR_SUGGESTIONS: 
            return []
        case CHANGE_SUGGESTIONS: 
            return action.payload
        default: 
            return state
    }
}

const resortNames : ResortNamesReducer = combineReducers({
    fetching,
    suggestions
})

const singleReducer : SingleReducer = combineReducers({
    allSkiDays,
    goal,
    errorList,
    resortNames: resortNames
})

export default singleReducer
