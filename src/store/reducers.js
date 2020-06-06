"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.suggestions = exports.fetching = exports.allSkiDays = exports.errorList = exports.skiDay = exports.goal = void 0;
const redux_1 = require("redux");
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
exports.fetching = (state = false, action) => {
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
exports.suggestions = (state = [], action) => {
    switch (action.type) {
        case constants_1.CLEAR_SUGGESTIONS:
            return [];
        case constants_1.CHANGE_SUGGESTIONS:
            return action.payload;
        default:
            return state;
    }
};
const resortNames = redux_1.combineReducers({
    fetching: exports.fetching,
    suggestions: exports.suggestions
});
const singleReducer = redux_1.combineReducers({
    allSkiDays: exports.allSkiDays,
    goal: exports.goal,
    errorList: exports.errorList,
    resortNames: resortNames
});
exports.default = singleReducer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWR1Y2Vycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpQ0FBaUY7QUFHakYsNENBUXNCO0FBVVQsUUFBQSxJQUFJLEdBQWlCLENBQUMsS0FBSyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQy9ELE1BQU0sQ0FBQyxJQUFJLEtBQUssb0JBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO0FBRXhDLFFBQUEsTUFBTSxHQUFtQixDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsTUFBTSxFQUFHLEVBQUUsQ0FDNUQsTUFBTSxDQUFDLElBQUksS0FBSyxtQkFBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7QUFFdkMsUUFBQSxTQUFTLEdBQXNCLENBQUMsS0FBSyxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRTtJQUMvRCxRQUFPLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDaEIsS0FBSyxxQkFBUztZQUNWLE9BQU8sQ0FBRSxHQUFHLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFFLENBQUE7UUFDdkMsS0FBSyx1QkFBVztZQUNaLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDN0Q7WUFDSSxPQUFPLEtBQUssQ0FBQTtLQUNuQjtBQUNMLENBQUMsQ0FBQTtBQUVZLFFBQUEsVUFBVSxHQUF1QixDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDakUsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ2pCLEtBQUssbUJBQU87WUFDUixNQUFNLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDbEYsT0FBTyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFFLEdBQUcsS0FBSyxFQUFFLGNBQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUUsQ0FBQTtRQUN4RSxLQUFLLHNCQUFVO1lBQ1gsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDakU7WUFDSSxPQUFPLEtBQUssQ0FBQTtLQUNuQjtBQUNMLENBQUMsQ0FBQTtBQUVZLFFBQUEsUUFBUSxHQUFxQixDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDaEUsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ2pCLEtBQUssOEJBQWtCO1lBQ25CLE9BQU8sSUFBSSxDQUFBO1FBQ2YsS0FBSywyQkFBZTtZQUNoQixPQUFPLEtBQUssQ0FBQTtRQUNoQixLQUFLLDhCQUFrQjtZQUNuQixPQUFPLEtBQUssQ0FBQTtRQUNoQjtZQUNJLE9BQU8sS0FBSyxDQUFBO0tBQ25CO0FBQ0wsQ0FBQyxDQUFBO0FBRVksUUFBQSxXQUFXLEdBQXdCLENBQUMsS0FBSyxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRTtJQUNuRSxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDakIsS0FBSyw2QkFBaUI7WUFDbEIsT0FBTyxFQUFFLENBQUE7UUFDYixLQUFLLDhCQUFrQjtZQUNuQixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUE7UUFDekI7WUFDSSxPQUFPLEtBQUssQ0FBQTtLQUNuQjtBQUNMLENBQUMsQ0FBQTtBQUVELE1BQU0sV0FBVyxHQUF3Qix1QkFBZSxDQUFDO0lBQ3JELFFBQVEsRUFBUixnQkFBUTtJQUNSLFdBQVcsRUFBWCxtQkFBVztDQUNkLENBQUMsQ0FBQTtBQUVGLE1BQU0sYUFBYSxHQUFtQix1QkFBZSxDQUFDO0lBQ2xELFVBQVUsRUFBVixrQkFBVTtJQUNWLElBQUksRUFBSixZQUFJO0lBQ0osU0FBUyxFQUFULGlCQUFTO0lBQ1QsV0FBVyxFQUFFLFdBQVc7Q0FDM0IsQ0FBQyxDQUFBO0FBRUYsa0JBQWUsYUFBYSxDQUFBIn0=