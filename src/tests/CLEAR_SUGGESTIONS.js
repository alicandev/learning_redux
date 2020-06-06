import {suggestions} from '../store/reducers'
import expect from 'expect'
import {CLEAR_SUGGESTIONS} from "../constants";

const action = {
    type: CLEAR_SUGGESTIONS
}

const state = ['Heavenly Ski Resort', 'Heavens Sonohara']

const expectedState = []

const actualState = suggestions(state, action)

expect(actualState).toEqual(expectedState)

console.log(`

    Challenge C: CLEAR_SUGGESTIONS PASSED!!!


`)