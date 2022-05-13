import Client from "./api";

export const GetAllMusic = async () => {
    try {
        const res = await Client.get('/musics')
        return res
    } catch (error) {
        throw error
    }
}