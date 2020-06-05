"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allSkiDays = exports.errorList = exports.skiDay = exports.goal = void 0;
const constants_1 = require("../constants");
exports.goal = (state = { days: 10 }, action) => action.type === constants_1.SET_GOAL ? action.payload : state;
exports.skiDay = (state = null, action) => action.type === constants_1.ADD_DAY ? action.payload : state;
exports.errorList = (state = [], action) => {
    switch (action.type) {
        case constants_1.ADD_ERROR:
            return [...state, action.payload];
        case constants_1.CLEAR_ERROR:
            return state.filter((message, i) => i !== action.payload);
        default:
            return state;
    }
};
exports.allSkiDays = (state = [], action) => {
    switch (action.type) {
        case constants_1.ADD_DAY:
            const dayBookedAlready = state.some(skiDay => skiDay.date === action.payload.date);
            return dayBookedAlready ? state : [...state, exports.skiDay(null, action)];
        case constants_1.REMOVE_DAY:
            return state.filter(skiDay => skiDay.date !== action.payload);
        default:
            return state;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWR1Y2Vycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSw0Q0FBbUY7QUFFdEUsUUFBQSxJQUFJLEdBQUcsQ0FBQyxRQUFlLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQW1CLEVBQVMsRUFBRSxDQUM1RSxNQUFNLENBQUMsSUFBSSxLQUFLLG9CQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtBQUV4QyxRQUFBLE1BQU0sR0FBRyxDQUFDLFFBQWlCLElBQUksRUFBRSxNQUFxQixFQUFXLEVBQUUsQ0FDNUUsTUFBTSxDQUFDLElBQUksS0FBSyxtQkFBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7QUFFdkMsUUFBQSxTQUFTLEdBQUcsQ0FBQyxRQUFvQixFQUFFLEVBQUUsTUFBd0IsRUFBYyxFQUFFO0lBQ3RGLFFBQU8sTUFBTSxDQUFDLElBQUksRUFBRTtRQUNoQixLQUFLLHFCQUFTO1lBQ1YsT0FBTyxDQUFFLEdBQUcsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUUsQ0FBQTtRQUN2QyxLQUFLLHVCQUFXO1lBQ1osT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUM3RDtZQUNJLE9BQU8sS0FBSyxDQUFBO0tBQ25CO0FBQ0wsQ0FBQyxDQUFBO0FBRVksUUFBQSxVQUFVLEdBQUcsQ0FBQyxRQUFxQixFQUFFLEVBQUUsTUFBcUIsRUFBZSxFQUFFO0lBQ3RGLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNqQixLQUFLLG1CQUFPO1lBQ1IsTUFBTSxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2xGLE9BQU8sZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBRSxHQUFHLEtBQUssRUFBRSxjQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFFLENBQUE7UUFDeEUsS0FBSyxzQkFBVTtZQUNYLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ2pFO1lBQ0ksT0FBTyxLQUFLLENBQUE7S0FDbkI7QUFDTCxDQUFDLENBQUEifQ==