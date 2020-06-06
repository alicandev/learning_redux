import {AllSkiDays, ErrorList, Goal, SkiDay} from "../types/state";
import {ErrorListAction, GoalAction, SkiDayAction, SuggestionsAction} from "../types/action";
import {
    ADD_DAY,
    ADD_ERROR, CANCEL_FETCHING, CHANGE_SUGGESTIONS,
    CLEAR_ERROR,
    CLEAR_SUGGESTIONS,
    FETCH_RESORT_NAMES,
    REMOVE_DAY,
    SET_GOAL
} from "../constants";

export const goal = (state : Goal = { days: 10 }, action : GoalAction) : Goal =>
    action.type === SET_GOAL ? action.payload : state

export const skiDay = (state : SkiDay = null, action : SkiDayAction) : SkiDay =>
    action.type === ADD_DAY ? action.payload : state

export const errorList = (state : ErrorList = [], action : ErrorListAction) : ErrorList => {
    switch(action.type) {
        case ADD_ERROR:
            return [ ...state, action.payload ]
        case CLEAR_ERROR:
            return state.filter((message, i) => i !== action.payload)
        default:
            return state
    }
}

export const allSkiDays = (state : AllSkiDays = [], action : SkiDayAction) : AllSkiDays => {
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

export const fetching = (state : boolean, action : SuggestionsAction) : boolean => {
    switch (action.type) {
        case FETCH_RESORT_NAMES: return true
        case CANCEL_FETCHING: return false
        case CHANGE_SUGGESTIONS: return false
        default: return state
    }
}


export const suggestions = (state : string[], action : SuggestionsAction) : string[] => {
    switch (action.type) {
        case CLEAR_SUGGESTIONS: return []
        case CHANGE_SUGGESTIONS: return action.payload
        default: return state
    }
}
