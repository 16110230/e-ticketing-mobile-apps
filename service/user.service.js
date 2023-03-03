import { getApi, postApi } from "../api/api"
import { baseApi } from "./baseApi"

const getUserById = () => {
    return getApi(`${baseApi}/users/by-id`)
}

export {getUserById}