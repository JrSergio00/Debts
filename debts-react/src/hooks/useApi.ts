import axios from "axios";

const api = axios.create({
    // baseURL: process.env.REACT_APP_API
    baseURL: "http://api.google.com"
})

export const useApi = () => ({
    validateToken: async (token: string) => {
        const response = await api.post('/validateToken', { token})
        return response.data
    },
    signin: async (email: string, password: string) => {
        const response = await api.post('/signin', { email, password})
        return response.data
    },
    signout: async () => {
        const response = await api.post('/signout')
        return response.data
    }
})