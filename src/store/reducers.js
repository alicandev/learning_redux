"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skiDay = exports.goal = void 0;
const constants_1 = require("../constants");
exports.goal = (state = { days: 10 }, action) => action.type === constants_1.SET_GOAL
    ? action.payload
    : state;
exports.skiDay = (state = null, action) => action.type === constants_1.ADD_DAY
    ? action.payload
    : state;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWR1Y2Vycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw0Q0FBaUQ7QUFHcEMsUUFBQSxJQUFJLEdBQUcsQ0FBQyxRQUFlLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBUyxFQUFFLENBQy9ELE1BQU0sQ0FBQyxJQUFJLEtBQUssb0JBQVE7SUFDcEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPO0lBQ2hCLENBQUMsQ0FBQyxLQUFLLENBQUE7QUFFRixRQUFBLE1BQU0sR0FBRyxDQUFDLFFBQWlCLElBQUksRUFBRSxNQUFNLEVBQVcsRUFBRSxDQUM3RCxNQUFNLENBQUMsSUFBSSxLQUFLLG1CQUFPO0lBQ25CLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTztJQUNoQixDQUFDLENBQUMsS0FBSyxDQUFBIn0=