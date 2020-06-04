"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const reducers_1 = require("./store/reducers");
const state = [
    "User not authorized",
    "Server feed not found"
];
const action = {
    type: constants_1.default.CLEAR_ERROR,
    payload: 0
};
const nextState = reducers_1.default.errors(state, action);
console.log(`
    initial goal: ${JSON.stringify(state)}
    action: ${JSON.stringify(action)}
    new goal: ${JSON.stringify(nextState)}
`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLDJDQUE0QjtBQUM1QiwrQ0FBaUM7QUFFakMsTUFBTSxLQUFLLEdBQWM7SUFDckIscUJBQXFCO0lBQ3JCLHVCQUF1QjtDQUMxQixDQUFBO0FBRUQsTUFBTSxNQUFNLEdBQWM7SUFDdEIsSUFBSSxFQUFFLG1CQUFDLENBQUMsV0FBVztJQUNuQixPQUFPLEVBQUUsQ0FBQztDQUNiLENBQUE7QUFFRCxNQUFNLFNBQVMsR0FBYyxrQkFBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsTUFBTSxDQUFDLENBQUE7QUFFbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQztvQkFDUyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBRTtjQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBRTtnQkFDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUU7Q0FDMUMsQ0FBQyxDQUFBIn0=