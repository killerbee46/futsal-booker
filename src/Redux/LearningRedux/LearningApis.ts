import axios from "axios"

export const getLearningApi = (data: any) => {
    return axios({
        method: "GET",
        url: "http://mules.beeaver.work/qualifications",
        params: { _limit: 10 }
    })
}