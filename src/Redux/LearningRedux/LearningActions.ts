import { FETCH_DATA, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from "./LearningTypes"

export const fetchData = (data:any)=>({
    type: FETCH_DATA,
    payload:data
})
export const fetchDataSuccess = (data:any)=>({
    type: FETCH_DATA_SUCCESS,
    payload: data
})
export const fetchDataFailure = (data:any)=>({
    type: FETCH_DATA_FAILURE,
    payload: data
})