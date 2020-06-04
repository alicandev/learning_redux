import S from './types/state'
import A from './types/action'
import C from './constants';
import R from './store/reducers';

const state : S.Errors = [
    "User not authorized",
    "Server feed not found"
]

const action : A.Errors = {
    type: C.CLEAR_ERROR,
    payload: 0
}

const nextState : S.Errors = R.errors(state,action)

console.log(`
    initial goal: ${ JSON.stringify(state) }
    action: ${ JSON.stringify(action) }
    new goal: ${ JSON.stringify(nextState) }
`)