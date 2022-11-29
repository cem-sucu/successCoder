import { createStore, combineReducers } from "redux";
import reducerCourses from "./reducers/reducerCourses";

const rootReducers = combineReducers({
    courses: reducerCourses
})

const store = createStore(reducerCourses)

export default store;