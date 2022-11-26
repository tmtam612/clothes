import { combineReducers } from "redux";
import { UserReducer } from './reducers/user.reducer';
// import { user }
export const rootReducer = combineReducers({
    user: UserReducer
});