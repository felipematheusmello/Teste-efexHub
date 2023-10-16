import { combineReducers } from "redux";
import authReducer from "./auth-reducer";
import loadingReducer from "./loading-reducer";
import tasksReducer from "./tasks-reducer";


const rootReducer = combineReducers({
    auth: authReducer,
    loading: loadingReducer,
    task: tasksReducer,
})


export default rootReducer