"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const reducers_1 = require("./store/reducers");
const state = [
    {
        resort: "Kirkwood",
        date: "2016-12-15",
        powder: true,
        backcountry: false
    }, {
        resort: "Boreal",
        date: "2016-12-16",
        powder: false,
        backcountry: true
    }
];
const action = {
    type: constants_1.REMOVE_DAY,
    payload: "2016-12-16"
};
const nextState = reducers_1.allSkiDays(state, action);
console.log(`
    initial goal: ${JSON.stringify(state)}
    action: ${JSON.stringify(action)}
    new goal: ${JSON.stringify(nextState)}
`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLDJDQUF1QztBQUN2QywrQ0FBNEM7QUFFNUMsTUFBTSxLQUFLLEdBQWdCO0lBQ3ZCO1FBQ0ksTUFBTSxFQUFFLFVBQVU7UUFDbEIsSUFBSSxFQUFFLFlBQVk7UUFDbEIsTUFBTSxFQUFFLElBQUk7UUFDWixXQUFXLEVBQUUsS0FBSztLQUNyQixFQUFFO1FBQ0MsTUFBTSxFQUFFLFFBQVE7UUFDaEIsSUFBSSxFQUFFLFlBQVk7UUFDbEIsTUFBTSxFQUFFLEtBQUs7UUFDYixXQUFXLEVBQUUsSUFBSTtLQUNwQjtDQUVKLENBQUE7QUFFRCxNQUFNLE1BQU0sR0FBa0I7SUFDMUIsSUFBSSxFQUFFLHNCQUFVO0lBQ2hCLE9BQU8sRUFBRSxZQUFZO0NBRXhCLENBQUE7QUFFRCxNQUFNLFNBQVMsR0FBZ0IscUJBQVUsQ0FBQyxLQUFLLEVBQUMsTUFBTSxDQUFDLENBQUE7QUFFdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQztvQkFDUyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBRTtjQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBRTtnQkFDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUU7Q0FDMUMsQ0FBQyxDQUFBIn0=