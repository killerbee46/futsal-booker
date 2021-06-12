import { FETCH_USER, FETCH_USER_FAILURE, FETCH_USER_SUCCESS } from "./UserTypes"

const INIT_STATE ={
    loading: false,
    error : '',
    list:[]
}
export const UserReducer = (state = INIT_STATE, action:any) =>{
    switch(action.type){
        case FETCH_USER:
            return {...state,loading:true}
        case FETCH_USER_SUCCESS:
            return {...state,loading:false,list:action.payload}
        case FETCH_USER_FAILURE:
            return {...state,loading:false,error:"SOMETHING WENT WRONG!!!"}
        default:
            return state
    }
}

export default UserReducer;