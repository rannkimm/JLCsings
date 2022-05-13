import Client from "./api";

export const GetAllUsers = async () => {
    try {
        const res = await Client.get('/users')
        return res
    } catch (error) {
        throw error
    }
}