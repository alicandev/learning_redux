import expect from 'expect'
import { fetching } from '../store/reducers'
import {CANCEL_FETCHING} from "../constants";

const action = {
    type: CANCEL_FETCHING
}

const state = true
const expectedState = false

const actualState = fetching(state, action)

expect(actualState).toEqual(expectedState)

console.log(`

    Challenge B: CANCEL_FETCHING PASSED!!!


`)