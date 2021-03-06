import { useState, useEffect } from "react"
import { useNavigate, useParams} from "react-router-dom"
import { GetIndMusic, UpdateMusic, DeleteMusic } from "../services/MusicServices"

const MusicDetails = () => {
const [music, setMusic] = useState()
const [show, setShow] = useState(false)
const [categories, setCategories] = useState([])

let {id} = useParams()
let userId = parseInt(localStorage.getItem('user'))
let navigate = useNavigate()


const editButton = () => {
    setShow(true)
}

const deleteButton = async () => {
    await DeleteMusic(id)
    navigate('/mymusic')
}

const optionHandleChange = (e) => {
    let options = e.target.value
    console.log(e)
    if(categories.includes(options)) {

        setCategories(categories.filter((item) => item !== options))
    } else {
        setCategories([...categories, options])
    }
    console.log('handle', categories)
}

const handleChange = (e) => {
    setMusic({...music, [e.target.name]: e.target.value })
}

const handleSubmit = async (e) => {
    if(Object.keys(categories).length === 0) {
        await UpdateMusic({
            id: id,
            user_id: userId,
            title: music.title,
            video: music.video,
            category: music.category,
            description: music.description
        })
    } else if(Object.keys(categories).length !== 0) {
        await UpdateMusic({
            id: id,
            user_id: userId,
            title: music.title,
            video: music.video,
            category: categories,
            description: music.description
        })
    }
    setMusic(music)
    setCategories([])
    setShow(false)

}

const showSheetById = (sheet) => {
        
        navigate(`/home/musics/sheet/${sheet.id}`)

}
useEffect(()=> {
    const getMusic = async (req, res) => {
        const data = await GetIndMusic(id)

        setMusic(data)
        
    }
    getMusic()
}, [])
// console.log(music)


    return (music) ? (
        <div>
            <div className="detailsContainer">
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
                <h3>{music.description}</h3>
                <div>
                {music.thisMusic.map((sheet) => (
                    <div onClick={()=> showSheetById(sheet)}  key = {sheet.id}>
                        <div>{sheet.title}</div>
                    </div>
                ))}
                </div>
                <h6>{music.user.username}</h6>
            
            </div>
            <div>
                { (userId === music.user_id) ? <button onClick={editButton}>Edit</button> : null }
                { (userId === music.user_id) ? <button onClick={deleteButton}>Delete</button> : null }
            </div>
            { (show) ? 
            <div>
                <h2>Edit Music</h2>
                <form onSubmit={handleSubmit}>
                    <input value={music.title}  name={'title'} placeholder={'title'} onChange={handleChange}/>
                    <div>
                        <label>Category:</label>
                        <div>
                            <input type='checkbox' name='category' value='?????????' id='?????????' onChange={optionHandleChange}/>
                            <label htmlFor='?????????'>?????????</label>
                        </div>
                        <div>
                            <input type='checkbox' name='category' value='?????????' id='?????????' onChange={optionHandleChange}/>
                            <label htmlFor='?????????'>?????????</label>
                        </div>
                        <div>
                            <input type='checkbox' name='category' value='?????????' id='?????????' onChange={optionHandleChange}/>
                            <label htmlFor='?????????'>?????????</label>
                        </div>
                        <div>
                            <input type='checkbox' name='category' value='?????????' id='?????????' onChange={optionHandleChange}/>
                            <label htmlFor='?????????'>?????????</label>
                        </div>
                        <div>
                            <input type='checkbox' name='category' value='?????????' id='?????????' onChange={optionHandleChange}/>
                            <label htmlFor='?????????'>?????????</label>
                        </div>
                    </div>
                    <input value={music.video}  name={'video'} placeholder={'video'} onChange={handleChange}/>
                    <textarea value={music.description}  name={'description'} placeholder={'description'} onChange={handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
            : null}
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
