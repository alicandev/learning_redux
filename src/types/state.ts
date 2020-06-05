export interface SkiDay {
    resort: string
    date: string
    powder: boolean
    backcountry: boolean
}

export type AllSkiDays = SkiDay[]

export interface Goal {
    days: number
}

export interface Suggestions {
    fetching: boolean
    suggestions: SkiDay[]
}

export type ErrorList = string[]

