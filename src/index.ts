import {AllSkiDays} from "./types/state";
import {SkiDayAction} from "./types/action";
import {REMOVE_DAY} from "./constants";
import {allSkiDays} from "./store/reducers";

const state : AllSkiDays = [
    {
        resort: "Kirkwood",
        date: "2016-12-15",
        powder: true,
        backcountry: false
    }, {
        resort: "Boreal",
        date: "2016-12-16",
        powder: false,
        backcountry: true
    }

]

const action : SkiDayAction = {
    type: REMOVE_DAY,
    payload: "2016-12-16"
    
}

const nextState : AllSkiDays = allSkiDays(state,action)

console.log(`
    initial goal: ${ JSON.stringify(state) }
    action: ${ JSON.stringify(action) }
    new goal: ${ JSON.stringify(nextState) }
`)