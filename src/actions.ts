import {
    ADD_DAY,
    ADD_ERROR, CANCEL_FETCHING,
    CHANGE_SUGGESTIONS,
    CLEAR_ERROR,
    CLEAR_SUGGESTIONS, FETCH_RESORT_NAMES,
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
import {ClearErrorAction, ClearSuggestionsAction, ResortNamesAction} from "./types/actions";
import {Action, ActionCreator, AnyAction, Dispatch} from "redux";
import {ThunkAction, ThunkDispatch, ThunkResult} from "redux-thunk";
import {AppState, ResortNames} from "./types/states";

export const addDay : AddDayActionCreator = (resort, date, powder = false, backcountry = false) => ({
    type: ADD_DAY, 
    payload: {resort,date,powder,backcountry}
});

export const removeDay : RemoveDayActionCreator = date => ({
    type: REMOVE_DAY, payload: date
});

export const setGoal : SetGoalActionCreator = goal => ({
    type: SET_GOAL, 
    payload: goal
});

export const clearSuggestions : ClearSuggestionsActionCreator = () => ({
    type: CLEAR_SUGGESTIONS
});

export const changeSuggestions : ChangeSuggestionsActionCreator = suggestions => ({
    type: CHANGE_SUGGESTIONS, 
    payload: suggestions
});

export const addError : AddErrorActionCreator = message => ({
    type: ADD_ERROR, 
    payload: message
});

export const clearError : ClearErrorActionCreator = index => ({
    type: CLEAR_ERROR, 
    payload: index
});

export const randomGoals : ActionCreator<ThunkAction<ResortNamesAction, ResortNames, void>> = () : ThunkResult<void> => 
    
    (dispatch : ThunkDispatch<ResortNamesAction>, getState: () => AppState) => {
        
        if (!getState().resortNames.fetching) {

            dispatch({
                type: FETCH_RESORT_NAMES
            });

            setTimeout(() => {
                dispatch({
                    type: CANCEL_FETCHING
                });
            }, 1500);
        }
    }
    
