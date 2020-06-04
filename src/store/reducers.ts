import C from '../constants';
import S from '../types/state';
import A from "../types/action";

module Reducers {
    export const goal = (state : S.Goal = { days: 10 }, action : A.Goal) : S.Goal =>
        action.type === C.SET_GOAL ? action.payload : state

    export const skiDay = (state : S.SkiDay = null, action : A.SkiDay) : S.SkiDay =>
        action.type === C.ADD_DAY ? action.payload : state

    export const errors = (state : S.Errors = [], action : A.Errors) : S.Errors => {
        switch(action.type) {
            case C.ADD_ERROR:
                return [ ...state, action.payload ]
            case C.CLEAR_ERROR:
                return state.filter((message, i) => i !== action.payload)
            default:
                return state
        }
    }
}

export default Reducers
