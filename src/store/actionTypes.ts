import { ADD_DAY, SET_GOAL } from "../constants";
import { Goal, SkiDay } from "./stateTypes";

export interface GoalAction {
    type: string
    payload: Goal
}

export interface SkiDayAction {
    type: string
    payload: SkiDay
}