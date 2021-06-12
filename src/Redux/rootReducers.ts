import { combineReducers } from "redux";
import BookingReducer from "./BookingRedux/BookingReducer";
import LearningReducer from "./LearningRedux/LearningReducers";
import UserReducer from "./UserRedux/UserReducer";

const reducers = (history:any)=>
combineReducers({
    LearningReducer: LearningReducer,
    UserReducer : UserReducer,
    BookingReducer: BookingReducer
});
export default reducers; 