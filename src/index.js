import C from './constants';
import { skiDay } from './store/reducers';

const state = null;

const action = {
    type: C.ADD_DAY,
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