import { SET_GOAL, ADD_DAY } from '../constants';
import { GoalAction, SkiDayAction } from "./actionTypes";
import { SkiDays, Errors, ResortNames, Goal, SkiDay } from './stateTypes';

export const goal = (state : Goal = { days: 10 }, action : GoalAction) : Goal => 
    action.type === ADD_DAY 
        ? action.payload
        : state

export const skiDay = (state : SkiDay = null, action : SkiDayAction) : SkiDay => 
    action.type === ADD_DAY 
        ? action.payload 
        : state
