import {ADD_DAY, ADD_ERROR, CLEAR_ERROR, REMOVE_DAY, SET_GOAL} from "../constants";
import {Goal, SkiDay} from "./state";

export type SkiDayAction = AddDay | RemoveDay
interface AddDay {type : typeof ADD_DAY; payload : SkiDay}
interface RemoveDay {type : typeof REMOVE_DAY; payload : string}

export interface GoalAction {type : typeof SET_GOAL; payload : Goal}

export type ErrorListAction = AddError | ClearError
interface AddError {type : typeof ADD_ERROR; payload : string}
interface ClearError {type : typeof CLEAR_ERROR; payload : number}
