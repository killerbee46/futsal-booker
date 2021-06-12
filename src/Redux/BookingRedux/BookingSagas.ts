import { all, call, fork, put, takeEvery } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { fetchBookingFailure, fetchBookingSuccess } from "./BookingActions";
import { getBookingApi } from "./BookingApis";
import { FETCH_BOOKING } from "./BookingTypes";

// async function
const getBookingAsync = async(data:any)=>await getBookingApi(data);

//pointer/generator function

function* getBooking(payload:any){
    try{
        //to initiate request
        const response : AxiosResponse = yield call(getBookingAsync,payload)
        console.log(response)
        if(response){
            yield put(fetchBookingSuccess(response.data))
        }
    } catch(error){
        yield put(fetchBookingFailure({}))
    }
}

//watch function

function* watchGetBooking(){
    yield takeEvery(FETCH_BOOKING,getBooking)
}

//for all other types 


// async function

//watch funstion

//combine function


export default function* BookingSagas(){
    yield all([
        fork(watchGetBooking)
    ])
}