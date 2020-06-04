"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skiDay = exports.goal = void 0;
const constants_1 = require("../constants");
exports.goal = (state = { days: 10 }, action) => action.type === constants_1.ADD_DAY
    ? action.payload
    : state;
exports.skiDay = (state = null, action) => action.type === constants_1.ADD_DAY
    ? action.payload
    : state;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWR1Y2Vycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw0Q0FBaUQ7QUFJcEMsUUFBQSxJQUFJLEdBQUcsQ0FBQyxRQUFlLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQW1CLEVBQVMsRUFBRSxDQUM1RSxNQUFNLENBQUMsSUFBSSxLQUFLLG1CQUFPO0lBQ25CLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTztJQUNoQixDQUFDLENBQUMsS0FBSyxDQUFBO0FBRUYsUUFBQSxNQUFNLEdBQUcsQ0FBQyxRQUFpQixJQUFJLEVBQUUsTUFBcUIsRUFBVyxFQUFFLENBQzVFLE1BQU0sQ0FBQyxJQUFJLEtBQUssbUJBQU87SUFDbkIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPO0lBQ2hCLENBQUMsQ0FBQyxLQUFLLENBQUEifQ==