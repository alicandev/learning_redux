export interface SkiDay {
    resort: string
    date: string
    powder: boolean
    backcountry: boolean
}

export interface SkiDays { skiDays: SkiDay[] }

export interface Goal { days: number }

export interface Errors { errors: string[] }

export interface ResortNames {
    fetching: boolean
    suggestions: SkiDay[]
}
