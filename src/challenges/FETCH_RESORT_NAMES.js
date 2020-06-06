import expect from 'expect'
import { fetching } from '../store/reducers'
import {SuggestionsAction} from "../types/action";
import {FETCH_RESORT_NAMES} from "../constants";

const action = {
    type: FETCH_RESORT_NAMES
}

const state = false
const expectedState = true

const actualState = fetching(state, action)

expect(actualState).toEqual(expectedState)

console.log(`

    Challenge A: FETCH_RESORT_NAMES PASSED!!!


`)