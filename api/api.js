import axios from './custom.interceptor'

async function getApi(url) {
    // return await fetch(url).then(res => res.json())
    return axios.get(url).then(res => res.data)
}

async function postApi(url, data) {
    //const request = new Request(url, { method: 'POST', body })
    //request.headers.append('Authorization', 'xxxxxxxxxxxxxxxxxx')
    // return await fetch(request).then(res => res.json())

    return axios.post(url, data, {method : 'POST'})
            .then(res => res.data)
}

export { getApi, postApi }