import axios from "axios"
import cookie from "cookie"

export const client = axios.create({
    baseURL: "http://localhost:3000"
})

export const getHeaders = () => {
    const token = window.localStorage.getItem("access_token")
    return {
        Authorization: `Bearer ${token}`
    }
}
