import Axios from 'axios'

let BASE_URL = process.env.NODE_ENV === 'production' ? `https://jlcsings-backend.herokuapp.com/` : 'http://localhost:3001/'
{/* export const BASE_URL = 'http://localhost:3001' */}


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