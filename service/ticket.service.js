import { getApi, postApi } from "../api/api"
import { baseApi } from "./baseApi"


const getTicketByUserId = () => {
    return getApi(`${baseApi}/tickets/user-customer`)
}

const postTicket = (body) => {
    return postApi(`${baseApi}/tickets`, body)
}

const getTicketById = (id) => {
    return getApi(`${baseApi}/tickets/${id}`)
}

const getTicketThreadById = (id) => {
    return getApi(`${baseApi}/ticket-threads/${id}`)
}

const postTicketThread = (body) => {
    return postApi(`${baseApi}/ticket-threads`, body)
}

export { getTicketByUserId, postTicket, getTicketById, getTicketThreadById, postTicketThread }