import { ADD_DAY } from './constants';
import { AddDay } from './store/actionTypes'
import { skiDay } from './store/reducers';

const state = null;

const action : AddDay = {
    type: ADD_DAY,
    payload: {
        "resort": "Sweet Haven",
        "date": "2017/11/1",
        "powder": false,
        "backcountry": false
    }
}

const nextState = skiDay(state,action)

console.log(`
    initial goal: ${ state }
    action: ${ JSON.stringify(action) }
    new goal: ${ JSON.stringify(nextState) }
`)