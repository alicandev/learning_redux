"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const reducers_1 = tslib_1.__importDefault(require("./store/reducers"));
const constants_1 = require("./constants");
const initialState_1 = tslib_1.__importDefault(require("./initialState"));
const state = initialState_1.default;
const setGoal = {
    type: constants_1.SET_GOAL,
    payload: { days: 2 }
};
const addDay = {
    type: constants_1.ADD_DAY,
    payload: {
        resort: "Ananke",
        date: "2020-02-02",
        powder: true,
        backcountry: true
    }
};
const nextState = reducers_1.default(reducers_1.default(state, setGoal), addDay);
console.log(`
    initial goal: ${JSON.stringify(state)}
    actions: ${JSON.stringify(setGoal)} /n ${JSON.stringify(addDay)}
    new goal: ${JSON.stringify(nextState)}
`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx3RUFBd0Q7QUFDeEQsMkNBQTBEO0FBRTFELDBFQUF5QztBQUd6QyxNQUFNLEtBQUssR0FBYyxzQkFBWSxDQUFBO0FBRXJDLE1BQU0sT0FBTyxHQUFnQjtJQUN6QixJQUFJLEVBQUUsb0JBQVE7SUFDZCxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFO0NBQ3ZCLENBQUE7QUFFRCxNQUFNLE1BQU0sR0FBa0I7SUFDMUIsSUFBSSxFQUFFLG1CQUFPO0lBQ2IsT0FBTyxFQUFFO1FBQ0wsTUFBTSxFQUFFLFFBQVE7UUFDaEIsSUFBSSxFQUFFLFlBQVk7UUFDbEIsTUFBTSxFQUFFLElBQUk7UUFDWixXQUFXLEVBQUUsSUFBSTtLQUNwQjtDQUNKLENBQUE7QUFFRCxNQUFNLFNBQVMsR0FBYyxrQkFBVSxDQUFDLGtCQUFVLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQyxFQUFDLE1BQU0sQ0FBQyxDQUFBO0FBRXpFLE9BQU8sQ0FBQyxHQUFHLENBQUM7b0JBQ1MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUU7ZUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUUsT0FBUSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBRTtnQkFDdEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUU7Q0FDMUMsQ0FBQyxDQUFBIn0=