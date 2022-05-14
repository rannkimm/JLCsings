import Client from "./api";

//call on home page to show all music
export const GetAllMusic = async () => {
    try {
        const res = await Client.get('/musics')
        return res.data
    } catch (error) {
        throw error
    }
}

//call on music details component
export const GetIndMusic = async (data) => {
    try {
        const res = await Client.get(`/musics/${data}`)
        return res
    } catch (error) {
        throw error
    }
}

//gets all music sheets...
export const GetAllMusicsheet = async () => {
    try {
        const res = await Client.get('/musics/all/sheets')
        return res
    } catch (error) {
        throw error
    }
}

//need get music by User


//call on sheet by id component
export const GetIndMusicsheet = async (data) => {
    try {
        const res = await Client.get(`/musics/all/sheets/${data}`)
        return res
    } catch (error) {
        throw error
    }
}

//call on homepage when user searches sheets by key
export const GetAllMusicsheetByKey = async (data) => {
    try {
        const res = await Client.get(`/musics/all/sheets/find/${data}`)
        return res
    } catch (error) {
        throw error
    }
}

//call on sheet form component
export const CreatMusicsheet = async (data) => {
    try {
        const res = await Client.post(`/musics/all/sheets/new/${data}`)
        return res
    } catch (error) {
        throw error
    }
}

//call on update music component
export const UpdateMusic = async (data) => {
    try {
        const res = await Client.put(`/musics/${data}`)
        return res
    } catch (error) {
        throw error
    }
}

//call on update sheet component
export const UpdateMusicsheet = async (data) => {
    try {
        const res = await Client.put(`/musics/sheets/${data}`)
        return res
    } catch (error) {
        throw error
    }
}

export const DeleteMusic = async (data) => {
    try {
        const res = await Client.delete(`/musics/${data}`)
        return res
    } catch (error) {
        throw error
    }
}

export const DeleteMusicsheet = async (data) => {
    try {
        const res = await Client.delete(`/musics/sheets/${data}`)
        return res
    } catch (error) {
        throw error
    }
}