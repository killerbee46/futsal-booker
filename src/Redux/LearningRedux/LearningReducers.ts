import { FETCH_DATA, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from "./LearningTypes"

const INIT_STATE = {
    loading:false,
    error:'',
    list:[]
}
export const LearningReducer = (state = INIT_STATE, action: any)=>{
    switch(action.type){
        case FETCH_DATA:
            return {...state,loading:true}
        case FETCH_DATA_SUCCESS:
            return {...state,loading:false,list: action.payload}
        case FETCH_DATA_FAILURE:
            return {...state,loading:false,error:'Something went wrong'}
        default:
            return state
    }
}
export default LearningReducer;