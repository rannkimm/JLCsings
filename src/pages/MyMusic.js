import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { GetIndUser } from "../services/UserServices"

const MyMusic = () => {
    const [thisUser, setThisUser] = useState()
    const [userMusics, setUserMusics] = useState()
    let navigate = useNavigate()

const getUserMusic = async (req, res) => {
    const data = await GetIndUser(localStorage.getItem('user'))
    setThisUser(data.indUser)
    setUserMusics(data.getMusics)

}



useEffect(()=> {

    getUserMusic()

},[])

const goToDetails = (music) => {
    navigate(`/home/musics/${music.id}`)
}

console.log(thisUser)
console.log(userMusics)

    return (userMusics && thisUser) ? (
        <div>
            <div>
                {userMusics.map((music) => (
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