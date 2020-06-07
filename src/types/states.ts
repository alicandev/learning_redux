import {CombinedState} from "redux";

export interface SkiDay {
    resort : string,
    date : string,
    powder : boolean,
    backcountry : boolean
}

export interface ResortNames {
    fetching : boolean,
    suggestions : string[]
}

export type ErrorList = string[]

export interface AppState {
    allSkiDays : SkiDay[],
    goal : number,
    resortNames : CombinedState<ResortNames>,
    errorList : ErrorList
}
