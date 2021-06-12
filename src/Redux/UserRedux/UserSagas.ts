import { all, call, fork, put, takeEvery } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { fetchUserFailure, fetchUserSuccess } from "./UserActions";
import { getUserApi } from "./UserApis";
import { FETCH_USER } from "./UserTypes";

// async function
const getUserAsync = async(data:any)=>await getUserApi(data);

//pointer/generator function

function* getUser(payload:any){
    try{
        //to initiate request
        const response : AxiosResponse = yield call(getUserAsync,payload)
        console.log(response)
        if(response){
            yield put(fetchUserSuccess(response.data))
        }
    } catch(error){
        yield put(fetchUserFailure({}))
    }
}

//watch function

function* watchGetUser(){
    yield takeEvery(FETCH_USER,getUser)
}

//for all other types 


// async function

//watch funstion

//combine function


export default function* UserSagas(){
    yield all([
        fork(watchGetUser)
    ])
}