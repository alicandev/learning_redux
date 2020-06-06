"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var reducers_1 = tslib_1.__importDefault(require("./store/reducers"));
var constants_1 = require("./constants");
var initialState_1 = tslib_1.__importDefault(require("./initialState"));
var state = initialState_1.default;
var setGoal = {
    type: constants_1.SET_GOAL,
    payload: { days: 2 }
};
var addDay = {
    type: constants_1.ADD_DAY,
    payload: {
        resort: "Ananke",
        date: "2020-02-02",
        powder: true,
        backcountry: true
    }
};
var newState = reducers_1.default(reducers_1.default(state, setGoal), addDay);
console.log("\n    initial : " + JSON.stringify(state) + "\n    actions: " + JSON.stringify(setGoal) + " /n " + JSON.stringify(addDay) + "\n    new goal: " + JSON.stringify(newState) + "\n");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxzRUFBd0Q7QUFDeEQseUNBQTBEO0FBRTFELHdFQUF5QztBQUd6QyxJQUFNLEtBQUssR0FBYyxzQkFBWSxDQUFBO0FBRXJDLElBQU0sT0FBTyxHQUFnQjtJQUN6QixJQUFJLEVBQUUsb0JBQVE7SUFDZCxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFO0NBQ3ZCLENBQUE7QUFFRCxJQUFNLE1BQU0sR0FBa0I7SUFDMUIsSUFBSSxFQUFFLG1CQUFPO0lBQ2IsT0FBTyxFQUFFO1FBQ0wsTUFBTSxFQUFFLFFBQVE7UUFDaEIsSUFBSSxFQUFFLFlBQVk7UUFDbEIsTUFBTSxFQUFFLElBQUk7UUFDWixXQUFXLEVBQUUsSUFBSTtLQUNwQjtDQUNKLENBQUE7QUFFRCxJQUFNLFFBQVEsR0FBYyxrQkFBVSxDQUFDLGtCQUFVLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQyxFQUFDLE1BQU0sQ0FBQyxDQUFBO0FBRXhFLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQ0ssSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsdUJBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFlBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsd0JBQ3JELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQ3hDLENBQUMsQ0FBQSJ9