import { combineReducers } from "redux";

import { templateReducer } from './templateReducer';
import { buildReducer } from './buildReducer';
export const rootReducer = combineReducers({
    templateReducer,
    buildReducer
})
