"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.suggestions = exports.fetching = exports.allSkiDays = exports.errorList = exports.skiDay = exports.goal = void 0;
var tslib_1 = require("tslib");
var redux_1 = require("redux");
var constants_1 = require("../constants");
exports.goal = function (state, action) {
    if (state === void 0) { state = { days: 10 }; }
    return action.type === constants_1.SET_GOAL ? action.payload : state;
};
exports.skiDay = function (state, action) {
    if (state === void 0) { state = null; }
    return action.type === constants_1.ADD_DAY ? action.payload : state;
};
exports.errorList = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case constants_1.ADD_ERROR:
            return tslib_1.__spreadArrays(state, [action.payload]);
        case constants_1.CLEAR_ERROR:
            return state.filter(function (message, i) { return i !== action.payload; });
        default:
            return state;
    }
};
exports.allSkiDays = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case constants_1.ADD_DAY:
            var dayBookedAlready = state.some(function (skiDay) { return skiDay.date === action.payload.date; });
            return dayBookedAlready ? state : tslib_1.__spreadArrays(state, [exports.skiDay(null, action)]);
        case constants_1.REMOVE_DAY:
            return state.filter(function (skiDay) { return skiDay.date !== action.payload; });
        default:
            return state;
    }
};
exports.fetching = function (state, action) {
    if (state === void 0) { state = false; }
    switch (action.type) {
        case constants_1.FETCH_RESORT_NAMES:
            return true;
        case constants_1.CANCEL_FETCHING:
            return false;
        case constants_1.CHANGE_SUGGESTIONS:
            return false;
        default:
            return state;
    }
};
exports.suggestions = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case constants_1.CLEAR_SUGGESTIONS:
            return [];
        case constants_1.CHANGE_SUGGESTIONS:
            return action.payload;
        default:
            return state;
    }
};
var resortNames = redux_1.combineReducers({
    fetching: exports.fetching,
    suggestions: exports.suggestions
});
var singleReducer = redux_1.combineReducers({
    allSkiDays: exports.allSkiDays,
    goal: exports.goal,
    errorList: exports.errorList,
    resortNames: resortNames
});
exports.default = singleReducer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWR1Y2Vycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsK0JBQWlGO0FBR2pGLDBDQVFzQjtBQVVULFFBQUEsSUFBSSxHQUFpQixVQUFDLEtBQW9CLEVBQUUsTUFBTTtJQUE1QixzQkFBQSxFQUFBLFVBQVUsSUFBSSxFQUFFLEVBQUUsRUFBRTtJQUNuRCxPQUFBLE1BQU0sQ0FBQyxJQUFJLEtBQUssb0JBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSztBQUFqRCxDQUFpRCxDQUFBO0FBRXhDLFFBQUEsTUFBTSxHQUFtQixVQUFDLEtBQVksRUFBRSxNQUFNO0lBQXBCLHNCQUFBLEVBQUEsWUFBWTtJQUMvQyxPQUFBLE1BQU0sQ0FBQyxJQUFJLEtBQUssbUJBQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSztBQUFoRCxDQUFnRCxDQUFBO0FBRXZDLFFBQUEsU0FBUyxHQUFzQixVQUFDLEtBQVUsRUFBRSxNQUFNO0lBQWxCLHNCQUFBLEVBQUEsVUFBVTtJQUNuRCxRQUFPLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDaEIsS0FBSyxxQkFBUztZQUNWLDhCQUFZLEtBQUssR0FBRSxNQUFNLENBQUMsT0FBTyxHQUFFO1FBQ3ZDLEtBQUssdUJBQVc7WUFDWixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxPQUFPLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxPQUFPLEVBQXBCLENBQW9CLENBQUMsQ0FBQTtRQUM3RDtZQUNJLE9BQU8sS0FBSyxDQUFBO0tBQ25CO0FBQ0wsQ0FBQyxDQUFBO0FBRVksUUFBQSxVQUFVLEdBQXVCLFVBQUMsS0FBVSxFQUFFLE1BQU07SUFBbEIsc0JBQUEsRUFBQSxVQUFVO0lBQ3JELFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNqQixLQUFLLG1CQUFPO1lBQ1IsSUFBTSxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBbkMsQ0FBbUMsQ0FBQyxDQUFBO1lBQ2xGLE9BQU8sZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLHdCQUFNLEtBQUssR0FBRSxjQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUE7UUFDeEUsS0FBSyxzQkFBVTtZQUNYLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLE9BQU8sRUFBOUIsQ0FBOEIsQ0FBQyxDQUFBO1FBQ2pFO1lBQ0ksT0FBTyxLQUFLLENBQUE7S0FDbkI7QUFDTCxDQUFDLENBQUE7QUFFWSxRQUFBLFFBQVEsR0FBcUIsVUFBQyxLQUFhLEVBQUUsTUFBTTtJQUFyQixzQkFBQSxFQUFBLGFBQWE7SUFDcEQsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ2pCLEtBQUssOEJBQWtCO1lBQ25CLE9BQU8sSUFBSSxDQUFBO1FBQ2YsS0FBSywyQkFBZTtZQUNoQixPQUFPLEtBQUssQ0FBQTtRQUNoQixLQUFLLDhCQUFrQjtZQUNuQixPQUFPLEtBQUssQ0FBQTtRQUNoQjtZQUNJLE9BQU8sS0FBSyxDQUFBO0tBQ25CO0FBQ0wsQ0FBQyxDQUFBO0FBRVksUUFBQSxXQUFXLEdBQXdCLFVBQUMsS0FBVSxFQUFFLE1BQU07SUFBbEIsc0JBQUEsRUFBQSxVQUFVO0lBQ3ZELFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNqQixLQUFLLDZCQUFpQjtZQUNsQixPQUFPLEVBQUUsQ0FBQTtRQUNiLEtBQUssOEJBQWtCO1lBQ25CLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQTtRQUN6QjtZQUNJLE9BQU8sS0FBSyxDQUFBO0tBQ25CO0FBQ0wsQ0FBQyxDQUFBO0FBRUQsSUFBTSxXQUFXLEdBQXdCLHVCQUFlLENBQUM7SUFDckQsUUFBUSxrQkFBQTtJQUNSLFdBQVcscUJBQUE7Q0FDZCxDQUFDLENBQUE7QUFFRixJQUFNLGFBQWEsR0FBbUIsdUJBQWUsQ0FBQztJQUNsRCxVQUFVLG9CQUFBO0lBQ1YsSUFBSSxjQUFBO0lBQ0osU0FBUyxtQkFBQTtJQUNULFdBQVcsRUFBRSxXQUFXO0NBQzNCLENBQUMsQ0FBQTtBQUVGLGtCQUFlLGFBQWEsQ0FBQSJ9