import {
    ADD_DAY,
    ADD_ERROR, CANCEL_FETCHING, CHANGE_SUGGESTIONS,
    CLEAR_ERROR,
    CLEAR_SUGGESTIONS,
    FETCH_RESORT_NAMES,
    REMOVE_DAY,
    SET_GOAL
} from "../constants";
import {Goal, SkiDay} from "./stateTypes";

export type SkiDayAction = AddDay | RemoveDay
interface AddDay {type: typeof ADD_DAY, payload: SkiDay} 
interface RemoveDay {type: typeof REMOVE_DAY, payload: string}

export interface GoalAction {type: typeof SET_GOAL, payload: Goal}

export type ErrorListAction = AddError | ClearError
interface AddError {type: typeof ADD_ERROR, payload: string}
interface ClearError {type: typeof CLEAR_ERROR, payload: number}

export type ResortNamesAction = ClearSuggestions | FetchResortNames | CancelFetching | ChangeSuggestions
interface ChangeSuggestions {type: typeof CHANGE_SUGGESTIONS, payload: string[] }
interface ClearSuggestions {type: typeof CLEAR_SUGGESTIONS}
interface FetchResortNames {type: typeof FETCH_RESORT_NAMES}
interface CancelFetching {type: typeof CANCEL_FETCHING}


