import { ADD_DAY } from './constants';
import { SkiDayAction } from './store/actionTypes'
import { SkiDay } from './store/stateTypes'
import { skiDay } from './store/reducers';

const state : SkiDay = null;

const action : SkiDayAction = {
    type: ADD_DAY,
    payload: {
        resort: "Sweet Haven",
        date: "2017/11/1",
        powder: false,
        backcountry: false
    }
}

const nextState : SkiDay = skiDay(state,action)

console.log(`
    initial goal: ${ state }
    action: ${ JSON.stringify(action) }
    new goal: ${ JSON.stringify(nextState) }
`)