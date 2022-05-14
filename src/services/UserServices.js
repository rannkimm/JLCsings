import Client from "./api";

export const GetAllUsers = async () => {
    try {
        const res = await Client.get('/users')
        return res
    } catch (error) {
        throw error
    }
}

export const GetIndUser = async (data) => {
    try {
        const res = await Client.get(`/users/${data}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const CreateMusic = async (data) => {
    try {
        let userId = data.user_id
        const res = await Client.post(`/users/${userId}/newmusic`, data)
        return res.data
    } catch (error) {
        throw error
    }
}

