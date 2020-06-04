"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const reducers_1 = require("./store/reducers");
const state = null;
const action = {
    type: constants_1.ADD_DAY,
    payload: {
        resort: "Sweet Haven",
        date: "2017/11/1",
        powder: false,
        backcountry: false
    }
};
const nextState = reducers_1.skiDay(state, action);
console.log(`
    initial goal: ${state}
    action: ${JSON.stringify(action)}
    new goal: ${JSON.stringify(nextState)}
`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFzQztBQUd0QywrQ0FBMEM7QUFFMUMsTUFBTSxLQUFLLEdBQVksSUFBSSxDQUFDO0FBRTVCLE1BQU0sTUFBTSxHQUFrQjtJQUMxQixJQUFJLEVBQUUsbUJBQU87SUFDYixPQUFPLEVBQUU7UUFDTCxNQUFNLEVBQUUsYUFBYTtRQUNyQixJQUFJLEVBQUUsV0FBVztRQUNqQixNQUFNLEVBQUUsS0FBSztRQUNiLFdBQVcsRUFBRSxLQUFLO0tBQ3JCO0NBQ0osQ0FBQTtBQUVELE1BQU0sU0FBUyxHQUFZLGlCQUFNLENBQUMsS0FBSyxFQUFDLE1BQU0sQ0FBQyxDQUFBO0FBRS9DLE9BQU8sQ0FBQyxHQUFHLENBQUM7b0JBQ1MsS0FBTTtjQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFFO2dCQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBRTtDQUMxQyxDQUFDLENBQUEifQ==