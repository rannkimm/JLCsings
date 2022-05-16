import { useEffect, useState } from "react"
import { useNavigate,} from "react-router-dom"
import { GetAllMusic } from "../services/MusicServices"

const Home = () => {
    const [musics, setMusics] = useState()
    let navigate = useNavigate()


    
    useEffect(()=> {
        const getMusics = async (req, res) => {
            const data = await GetAllMusic()
            setMusics(data)
            console.log(data)
        }
        getMusics()
    }, [])
    
    const showMusicDetails = (music) => {
        navigate(`/home/musics/${music.id}`)
    }


    return (musics) ? (
        <div>
            <div className="titlecontainer">
                {musics.map((music) => (
                    <div onClick={()=> showMusicDetails(music)} key = {music.id}>
                        <div className="musictitle">{music.title}</div>
                    </div>
                ))}
            </div>
        </div>
    ) : (
        <div></div>
    )
}

export default Home


// list of all musics just showing title
// title should navigate to the MusicDetails component