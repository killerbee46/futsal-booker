import { all } from 'redux-saga/effects';
import BookingSagas from './BookingRedux/BookingSagas';
import LearningSagas from "./LearningRedux/LearningSagas";
import UserSagas from './UserRedux/UserSagas';

export default function* rootSagas(){
    yield all([
        LearningSagas(),
        UserSagas(),
        BookingSagas()
    ]);
} 