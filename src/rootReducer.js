import { combineReducers } from "redux";
import loginReducer from "./containers/Login/reducer";
import usersListReducer from "./containers/Dashboard/reducer";
import userDetailReducer from "./containers/UserDetail/reducer";

const rootReducer = () => {
    return combineReducers({
        login: loginReducer,
        users: usersListReducer,
        userDetail: userDetailReducer
    });
};

export default rootReducer;