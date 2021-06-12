import {  FETCH_BOOKING, FETCH_BOOKING_FAILURE, FETCH_BOOKING_SUCCESS } from "./BookingTypes"

const INIT_STATE ={
    loading: false,
    error : '',
    list:[]
}
export const BookingReducer = (state = INIT_STATE, action:any) =>{
    switch(action.type){
        case FETCH_BOOKING:
            return {...state,loading:true}
        case FETCH_BOOKING_SUCCESS:
            return {...state,loading:false,list:action.payload}
        case FETCH_BOOKING_FAILURE:
            return {...state,loading:false,error:"SOMETHING WENT WRONG!!!"}
        default:
            return state
    }
}

export default BookingReducer;