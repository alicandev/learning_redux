export module StateTypes {
    export interface SkiDay {
        resort: string
        date: string
        powder: boolean
        backcountry: boolean
    }
    
    export interface Goal {
        days: number
    }
    
    export interface Suggestions {
        fetching: boolean
        suggestions: SkiDay[]
    }
    
    export type Errors = string[]
}

export default StateTypes
