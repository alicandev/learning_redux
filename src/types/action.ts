import S from '../types/state'
import C from "../constants";

module ActionTypes {
    export interface SkiDay {
        type: typeof C.ADD_DAY | typeof C.REMOVE_DAY
        payload: S.SkiDay
    }

    export interface Goal {
        type: typeof C.SET_GOAL
        payload: S.Goal
    }

    export type Errors = AddError | ClearError
    interface AddError {
        type: typeof C.ADD_ERROR
        payload: string
    }
    interface ClearError {
        type: typeof C.CLEAR_ERROR
        payload: number
    }
}

export default ActionTypes
