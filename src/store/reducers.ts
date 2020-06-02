import { SET_GOAL, ADD_DAY } from '../constants';
import { SkiDays, Errors, ResortNames, Goal, SkiDay } from './stateTypes';

export const goal = (state : Goal = { days: 10 }, action) : Goal => 
    action.type === SET_GOAL 
        ? action.payload
        : state

export const skiDay = (state : SkiDay = null, action) : SkiDay => 
    action.type === ADD_DAY 
        ? action.payload 
        : state
