import { AxiosResponse } from "axios";
import { all, call, fork, put, takeEvery, } from 'redux-saga/effects';
import { fetchDataFailure, fetchDataSuccess } from "./LearningActions";
import { getLearningApi } from "./LearningApis";
import { FETCH_DATA } from "./LearningTypes";

// async function
const getDataAsync = async(data:any)=>await getLearningApi(data)

//pointer function

function* getData(payload:any){
    try{
        //to initiate request
        const response : AxiosResponse = yield call(getDataAsync,payload)
        console.log(response)
        if(response){
            yield put(fetchDataSuccess(response.data))
        }
    } catch(error){
        yield put(fetchDataFailure({}))
    } 
}
//watch function

function* watchGetData(){
    yield takeEvery(FETCH_DATA,getData)
}

// for all types
//async function

//pointer function

//combine export

export default function* LearningSagas(){
    yield all([
        fork(watchGetData)
    ])
}