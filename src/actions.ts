import {
    ADD_DAY,
    ADD_ERROR,
    CHANGE_SUGGESTIONS,
    CLEAR_ERROR,
    CLEAR_SUGGESTIONS,
    REMOVE_DAY,
    SET_GOAL
} from "./constants";
import {
    AddDayActionCreator,
    AddErrorActionCreator,
    ChangeSuggestionsActionCreator, ClearErrorActionCreator,
    ClearSuggestionsActionCreator,
    RemoveDayActionCreator,
    SetGoalActionCreator
} from "./types/actionCreators";
import {ClearErrorAction} from "./types/actions";

export const addDay : AddDayActionCreator = 
    (resort, date, powder = false, backcountry = false) => 
        ({
            type: ADD_DAY, 
            payload: {resort,date,powder,backcountry}
        });

export const removeDay : RemoveDayActionCreator = 
    date => 
        ({
            type: REMOVE_DAY, 
            payload: date
        });

export const setGoal : SetGoalActionCreator = 
    goal =>
        ({
            type: SET_GOAL,
            payload: goal
        });

export const clearSuggestions : ClearSuggestionsActionCreator = 
    () =>
        ({
            type: CLEAR_SUGGESTIONS
        });

export const changeSuggestions : ChangeSuggestionsActionCreator = 
    suggestions =>
        ({
            type: CHANGE_SUGGESTIONS,
            payload: suggestions
        });

export const addError : AddErrorActionCreator = 
    error =>
        ({
            type: ADD_ERROR,
            payload: error
        });

export const clearError : ClearErrorActionCreator = 
    i =>
        ({
            type: CLEAR_ERROR,
            payload: i
        });
