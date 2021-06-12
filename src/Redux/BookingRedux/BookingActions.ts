import { FETCH_BOOKING, FETCH_BOOKING_FAILURE, FETCH_BOOKING_SUCCESS } from "./BookingTypes";

export const fetchBooking = (data:any)=>({
    type: FETCH_BOOKING,
    payload:data
})
export const fetchBookingSuccess =(data:any)=>({
    type: FETCH_BOOKING_SUCCESS,
    payload: data
})
export const fetchBookingFailure = (data:any)=>({
    type : FETCH_BOOKING_FAILURE,
    payload:data
})