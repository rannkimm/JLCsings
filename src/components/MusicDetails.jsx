import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { GetIndMusic } from "../services/MusicServices"

const MusicDetails = () => {
const [music, setMusic] = useState()

let {id} = useParams()


useEffect(()=> {
    const getMusic = async (req, res) => {
        const data = await GetIndMusic(id)
        console.log(data)
        setMusic(data)
    }
    getMusic()
}, [])

    return (music) ? (
        <div>
            <h1>{music.title}</h1>
            <div data-ref={music.video}>
                
            </div>
            
        </div>
    ) : (
        <div></div>
    )
}

export default MusicDetails


//show detail of each usermusics
//link to user
//link to musicsheet (sheetbyid)


//const getMusics = async (req, res) => {
//     const data = await GetAllMusic()
//     setMusics(data)
//     console.log(data)
// }
// getMusics()