import {GoalAction, SkiDayAction} from "./types/actionTypes";
import appReducer, {allSkiDays} from "./store/reducers";
import {ADD_DAY, REMOVE_DAY, SET_GOAL} from "./constants";
import {AppState, SkiDay} from "./types/stateTypes";
import initialState from "./initialState"
import {AnyAction} from "redux";

const state : AppState = initialState

const setGoal : GoalAction = {
    type: SET_GOAL,
    payload: { days: 2 }
}

const addDay : SkiDayAction = {
    type: ADD_DAY,
    payload: {
        resort: "Ananke",
        date: "2020-02-02",
        powder: true,
        backcountry: true
    }
}

const newState : AppState = appReducer(appReducer(state,setGoal),addDay)

console.log(`
    initial : ${ JSON.stringify(state) }
    actions: ${ JSON.stringify(setGoal) } /n ${ JSON.stringify(addDay) }
    new goal: ${ JSON.stringify(newState) }
`)