import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import { GetIndUser } from "../services/UserServices"



const MyMusic = ({indUserMusic, setindUserMusic}) => {
    const [thisUser, setThisUser] = useState()
    let navigate = useNavigate()
    let userId = parseInt(localStorage.getItem('user'))

const getUserMusic = async (req, res) => {
    const data = await GetIndUser(userId)
    setThisUser(data.indUser)
    setindUserMusic(data.getMusics)

}


useEffect(()=> {

    getUserMusic()

},[])

const goToDetails = (music) => {
    navigate(`/home/musics/${music.id}`)
}




    return (indUserMusic && thisUser) ? (
        <div className="titlecontainer">
            <Link to={('/mymusic/new')}><button className="musiccreate-button">Create</button></Link>
            <div >
                {indUserMusic.map((music) => (
                    <div onClick={()=> goToDetails(music)} key = {music.id}>
                        <div className="musictitle">{music.title}</div>
                    </div>
                ))}
            </div>
        </div>

    ) : (
        <div></div>
    )
}


export default MyMusic