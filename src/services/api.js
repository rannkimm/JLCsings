import Axios from 'axios'

let apiUrl = process.env.NODE_ENV === 'http://localhost:3001'
export const BASE_URL = apiUrl

const Client = Axios.create({ baseURL: BASE_URL })

Client.interceptors.request.use(
    (config) => {
    //reading our LS Token
    const token = localStorage.getItem('token')
    
        if (token) {
            config.headers['authorization'] = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

export default Client