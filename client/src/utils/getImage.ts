import { baseUrl } from "../api/Api"

const getImage = (url) => {
    return `${baseUrl}/uploads/${url}`
}

export default getImage