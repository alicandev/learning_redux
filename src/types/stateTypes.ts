import {CombinedState} from "redux";

export interface SkiDay {
    resort: string
    date: string
    powder: boolean
    backcountry: boolean
}
export interface Goal { days: number }
export interface ResortNames { fetching: boolean; suggestions: string[] }
export type ErrorList = string[]

export interface AppState {
    allSkiDays: SkiDay[]
    goal: Goal
    resortNames: CombinedState<ResortNames>
    errorList: ErrorList
}
