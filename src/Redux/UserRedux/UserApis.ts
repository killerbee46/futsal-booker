import axios from "axios"

export const getUserApi=(data:any)=>{
    return axios({
        method:"GET",
        url:"http://mules.beeaver.work/qualifications"
    })
}