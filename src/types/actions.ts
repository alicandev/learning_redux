import {
    ADD_DAY,
    ADD_ERROR, CANCEL_FETCHING, CHANGE_SUGGESTIONS,
    CLEAR_ERROR,
    CLEAR_SUGGESTIONS,
    FETCH_RESORT_NAMES,
    REMOVE_DAY,
    SET_GOAL
} from "../constants";
import {SkiDay} from "../types/states";

export type SkiDayAction = AddDayAction | RemoveDayAction
export interface AddDayAction {type : typeof ADD_DAY, payload : SkiDay} 
export interface RemoveDayAction {type : typeof REMOVE_DAY, payload : string}

export interface SetGoalAction {type : typeof SET_GOAL, payload : number}

export type ErrorListAction = AddErrorAction | ClearErrorAction
export interface AddErrorAction {type : typeof ADD_ERROR, payload : string}
export interface ClearErrorAction {type : typeof CLEAR_ERROR, payload : number}

export type ResortNamesAction = ClearSuggestionsAction | FetchResortNamesAction | CancelFetchingAction | ChangeSuggestionsAction
export interface ChangeSuggestionsAction {type : typeof CHANGE_SUGGESTIONS, payload : string[] }
export interface ClearSuggestionsAction {type : typeof CLEAR_SUGGESTIONS}
export interface FetchResortNamesAction {type : typeof FETCH_RESORT_NAMES}
export interface CancelFetchingAction {type : typeof CANCEL_FETCHING}


