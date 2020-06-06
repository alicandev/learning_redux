"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var initialState = {
    allSkiDays: [
        {
            resort: "Kirkwood",
            date: "2016/12/7",
            powder: true,
            backcountry: false
        },
        {
            resort: "Squaw Valley",
            date: "2016/12/8",
            powder: false,
            backcountry: false
        },
        {
            resort: "Mt Tallac",
            date: "2016/12/9",
            powder: false,
            backcountry: true
        }
    ],
    goal: { days: 10 },
    errorList: [],
    resortNames: {
        fetching: false,
        suggestions: ["Squaw Valley", "Snowbird", "Stowe", "Steamboat"]
    }
};
exports.default = initialState;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbFN0YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5pdGlhbFN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsSUFBTSxZQUFZLEdBQWM7SUFDNUIsVUFBVSxFQUFFO1FBQ1I7WUFDSSxNQUFNLEVBQUUsVUFBVTtZQUNsQixJQUFJLEVBQUUsV0FBVztZQUNqQixNQUFNLEVBQUUsSUFBSTtZQUNaLFdBQVcsRUFBRSxLQUFLO1NBQ3JCO1FBQ0Q7WUFDSSxNQUFNLEVBQUUsY0FBYztZQUN0QixJQUFJLEVBQUUsV0FBVztZQUNqQixNQUFNLEVBQUUsS0FBSztZQUNiLFdBQVcsRUFBRSxLQUFLO1NBQ3JCO1FBQ0Q7WUFDSSxNQUFNLEVBQUUsV0FBVztZQUNuQixJQUFJLEVBQUUsV0FBVztZQUNqQixNQUFNLEVBQUUsS0FBSztZQUNiLFdBQVcsRUFBRSxJQUFJO1NBQ3BCO0tBQ0o7SUFDRCxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO0lBQ2xCLFNBQVMsRUFBRSxFQUFFO0lBQ2IsV0FBVyxFQUFFO1FBQ1QsUUFBUSxFQUFFLEtBQUs7UUFDZixXQUFXLEVBQUUsQ0FBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUU7S0FDcEU7Q0FDSixDQUFBO0FBRUQsa0JBQWUsWUFBWSxDQUFBIn0=