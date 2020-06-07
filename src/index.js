"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var redux_1 = require("redux");
var reducers_1 = tslib_1.__importDefault(require("./store/reducers"));
var initialState_1 = tslib_1.__importDefault(require("./initialState"));
var constants_1 = require("./constants");
var store = redux_1.createStore(reducers_1.default, initialState_1.default);
console.log('initial state', store.getState());
store.dispatch({
    type: constants_1.ADD_DAY,
    payload: {
        resort: "Ananke",
        date: "2013/12/7",
        powder: false,
        backcountry: true
    }
});
console.log('new state', store.getState());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQkFBaUM7QUFDakMsc0VBQXlDO0FBQ3pDLHdFQUF5QztBQUN6Qyx5Q0FBb0M7QUFFcEMsSUFBTSxLQUFLLEdBQUcsbUJBQVcsQ0FBQyxrQkFBVSxFQUFFLHNCQUFZLENBQUMsQ0FBQztBQUVwRCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtBQUU5QyxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQ1gsSUFBSSxFQUFFLG1CQUFPO0lBQ2IsT0FBTyxFQUFFO1FBQ0wsTUFBTSxFQUFFLFFBQVE7UUFDaEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLEtBQUs7UUFDYixXQUFXLEVBQUUsSUFBSTtLQUNwQjtDQUNKLENBQUMsQ0FBQTtBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBIn0=