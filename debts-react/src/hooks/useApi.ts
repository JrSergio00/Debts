import axios from "axios";

const api = axios.create({
    // baseURL: process.env.REACT_APP_API
    baseURL: "http://api.google.com"
})

export const useApi = () => ({
    validateToken: async (token: string) => {
        return {
            user: {
                id: 1,
                name: "Sérgio",
                email: "sergiojr9834@gmail.com"
            }
        }
        const response = await api.post('/validateToken', { token})
        return response.data
    },
    signin: async (email: string, password: string) => {
        return {
            user: {
                id: 1,
                name: "Sérgio",
                email: "sergiojr9834@gmail.com"
            },
            token: "7564209843652"
        }
        const response = await api.post('/signin', { email, password})
        return response.data
    },
    signout: async () => {
        return { status: true }
        const response = await api.post('/signout')
        return response.data
    }
})