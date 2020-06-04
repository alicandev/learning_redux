"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
var Reducers;
(function (Reducers) {
    Reducers.goal = (state = { days: 10 }, action) => action.type === constants_1.default.SET_GOAL ? action.payload : state;
    Reducers.skiDay = (state = null, action) => action.type === constants_1.default.ADD_DAY ? action.payload : state;
    Reducers.errors = (state = [], action) => {
        switch (action.type) {
            case constants_1.default.ADD_ERROR:
                return [...state, action.payload];
            case constants_1.default.CLEAR_ERROR:
                return state.filter((message, i) => i !== action.payload);
            default:
                return state;
        }
    };
})(Reducers || (Reducers = {}));
exports.default = Reducers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWR1Y2Vycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRDQUE2QjtBQUk3QixJQUFPLFFBQVEsQ0FpQmQ7QUFqQkQsV0FBTyxRQUFRO0lBQ0UsYUFBSSxHQUFHLENBQUMsUUFBaUIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBZSxFQUFXLEVBQUUsQ0FDNUUsTUFBTSxDQUFDLElBQUksS0FBSyxtQkFBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO0lBRTFDLGVBQU0sR0FBRyxDQUFDLFFBQW1CLElBQUksRUFBRSxNQUFpQixFQUFhLEVBQUUsQ0FDNUUsTUFBTSxDQUFDLElBQUksS0FBSyxtQkFBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO0lBRXpDLGVBQU0sR0FBRyxDQUFDLFFBQW1CLEVBQUUsRUFBRSxNQUFpQixFQUFhLEVBQUU7UUFDMUUsUUFBTyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ2hCLEtBQUssbUJBQUMsQ0FBQyxTQUFTO2dCQUNaLE9BQU8sQ0FBRSxHQUFHLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFFLENBQUE7WUFDdkMsS0FBSyxtQkFBQyxDQUFDLFdBQVc7Z0JBQ2QsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUM3RDtnQkFDSSxPQUFPLEtBQUssQ0FBQTtTQUNuQjtJQUNMLENBQUMsQ0FBQTtBQUNMLENBQUMsRUFqQk0sUUFBUSxLQUFSLFFBQVEsUUFpQmQ7QUFFRCxrQkFBZSxRQUFRLENBQUEifQ==