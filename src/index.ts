import storeFactory from "./store";
import {randomGoals, suggestResortNames} from "./actions"

const store = storeFactory();

store.dispatch(
    suggestResortNames("hea")
);

