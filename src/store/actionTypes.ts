import { ADD_DAY, SET_GOAL } from "../constants";
import { Goal, SkiDay } from "./stateTypes";

export interface AddDay {
    type: typeof ADD_DAY
    payload: SkiDay
}

export interface SetGoal {
    type: typeof SET_GOAL
    payload: Goal
}