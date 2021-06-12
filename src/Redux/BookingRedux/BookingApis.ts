import axios from "axios"

export const getBookingApi=(data:any)=>{
    return axios({
        method:"GET",
        url:"http://mules.beeaver.work/qualifications"
    })
}