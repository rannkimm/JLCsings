import { useState, useEffect } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import { GetIndMusic } from "../services/MusicServices"

const MusicDetails = () => {
const [music, setMusic] = useState()
const [show, setShow] = useState()

let {id} = useParams()
let userId = localStorage.getItem('user')
// const renderButtons = () => {
//     if (userId === music.user_id) {
//         <Link
//     }
// }

useEffect(()=> {
    const getMusic = async (req, res) => {
        const data = await GetIndMusic(id)

        setMusic(data)
        
    }
    getMusic()
}, [])
console.log(music)

    return (music) ? (
        <div>
            <h1>{music.title}</h1>
            <div>
                <iframe 
                width="560" 
                height="315" 
                src={music.video} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                ></iframe>
            </div>
            <div>
                {music.category.map((item) => (
                    <div key={item}>
                        <div>{item}</div>
                    </div>
                ))}
            </div>
            <h6>{music.user.username}</h6>
            
        </div>
    ) : (
        <div></div>
    )
}

export default MusicDetails

//MAKE GET ALL USERS PAGE THAT LINKS TO THE USERS' MUSIC (TITLE)
//show detail of each usermusics
//link to category music titles=? categoryMusics
//link to user
//link to musicsheet (sheetbyid)
