import { FETCH_USER, FETCH_USER_FAILURE, FETCH_USER_SUCCESS } from "./UserTypes";

export const fetchUser = (data:any)=>({
    type: FETCH_USER,
    payload:data
})
export const fetchUserSuccess =(data:any)=>({
    type: FETCH_USER_SUCCESS,
    payload: data
})
export const fetchUserFailure = (data:any)=>({
    type : FETCH_USER_FAILURE,
    payload:data
})