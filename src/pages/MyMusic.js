import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { GetIndUser } from "../services/UserServices"



const MyMusic = ({indUserMusic, setindUserMusic}) => {
    const [thisUser, setThisUser] = useState()
    let navigate = useNavigate()

const getUserMusic = async (req, res) => {
    const data = await GetIndUser(localStorage.getItem('user'))
    setThisUser(data.indUser)
    setindUserMusic(data.getMusics)

}


useEffect(()=> {

    getUserMusic()

},[])

const goToDetails = (music) => {
    navigate(`/home/musics/${music.id}`)
}

const createNew = () => {
    navigate('/mymusic/new')
}


    return (indUserMusic && thisUser) ? (
        <div>
            <div>
                {indUserMusic.map((music) => (
                    <div onClick={()=> goToDetails(music)} key = {music.id}>
                        <div>{music.title}</div>
                    </div>
                ))}
            </div>
        </div>
    ) : (
        <div></div>
    )
}


export default MyMusic