"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const reducers_1 = require("./store/reducers");
const state = null;
const action = {
    type: constants_1.ADD_DAY,
    payload: {
        "resort": "Sweet Haven",
        "date": "2017/11/1",
        "powder": false,
        "backcountry": false
    }
};
const nextState = reducers_1.skiDay(state, action);
console.log(`
    initial goal: ${state}
    action: ${JSON.stringify(action)}
    new goal: ${JSON.stringify(nextState)}
`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFzQztBQUV0QywrQ0FBMEM7QUFFMUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBRW5CLE1BQU0sTUFBTSxHQUFZO0lBQ3BCLElBQUksRUFBRSxtQkFBTztJQUNiLE9BQU8sRUFBRTtRQUNMLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLE1BQU0sRUFBRSxXQUFXO1FBQ25CLFFBQVEsRUFBRSxLQUFLO1FBQ2YsYUFBYSxFQUFFLEtBQUs7S0FDdkI7Q0FDSixDQUFBO0FBRUQsTUFBTSxTQUFTLEdBQUcsaUJBQU0sQ0FBQyxLQUFLLEVBQUMsTUFBTSxDQUFDLENBQUE7QUFFdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQztvQkFDUyxLQUFNO2NBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUU7Z0JBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFFO0NBQzFDLENBQUMsQ0FBQSJ9