﻿import {AppState} from "./types/stateTypes";

const initialState : AppState = {
    allSkiDays: [
        {
            resort: "Kirkwood",
            date: "2016/12/7",
            powder: true,
            backcountry: false
        },
        {
            resort: "Squaw Valley",
            date: "2016/12/8",
            powder: false,
            backcountry: false
        },
        {
            resort: "Mt Tallac",
            date: "2016/12/9",
            powder: false,
            backcountry: true
        }
    ],
    goal: { days: 10 },
    errorList: [],
    resortNames: {
        fetching: false,
        suggestions: [ "Squaw Valley", "Snowbird", "Stowe", "Steamboat" ]
    }
}

export default initialState