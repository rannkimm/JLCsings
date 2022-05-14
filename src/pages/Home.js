import { useEffect, useState } from "react"
import { GetAllMusic } from "../services/MusicServices"

const Home = () => {
    const [musics, setMusics] = useState()
    
    useEffect(()=> {
        const getMusics = async (req, res) => {
            const data = await GetAllMusic()
            setMusics(data)
            console.log(data)
        }
        getMusics()
    }, [])
    

    return (musics) ? (
        <div>
            <div>
                {musics.map((music) => (
                    <ul key = {music.id}>
                        <li>{music.title}</li>
                    </ul>
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