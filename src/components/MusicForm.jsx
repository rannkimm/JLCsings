import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { CreateMusic } from "../services/UserServices"

const MusicForm = (props) => {
    const [newMusic, setNewMusic] = useState({
        title: '',
        category: [],
        video: '',
        description: ''
    })
    const [categories, setCategories] = useState([])

    let id = parseInt(localStorage.getItem('user'))


    let navigate = useNavigate()

    const handleChange = (e) => {
        setNewMusic({...newMusic, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await CreateMusic({
            user_id: id,
            title: newMusic.title,
            category: categories,
            video: newMusic.video,
            description: newMusic.description
        })
        props.setindUserMusic([...props.indUserMusic,newMusic])
        setCategories([])
        setNewMusic('')
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
        
    }

    console.log(categories)

    return (
        <div >
            <h2 className="addmusic">Add New Music</h2>
            <form className="musicform-con" onSubmit={handleSubmit}>
                <input className="music-title" value={newMusic.title} onChange={handleChange} name={'title'} placeholder={'title'} />
                <div className="music-cat">
                    <label>Category:</label>
                    <div >
                        <input type='checkbox' name='category' value='느린송' id='느린송' onChange={optionHandleChange}/>
                        <label htmlFor='느린송'>느린송</label>
                    </div>
                    <div>
                        <input type='checkbox' name='category' value='빠른송' id='빠른송' onChange={optionHandleChange}/>
                        <label htmlFor='빠른송'>빠른송</label>
                    </div>
                    <div>
                        <input type='checkbox' name='category' value='입례송' id='입례송' onChange={optionHandleChange}/>
                        <label htmlFor='입례송'>입례송</label>
                    </div>
                    <div>
                        <input type='checkbox' name='category' value='축복송' id='축복송' onChange={optionHandleChange}/>
                        <label htmlFor='축복송'>축복송</label>
                    </div>
                    <div>
                        <input type='checkbox' name='category' value='기도송' id='기도송' onChange={optionHandleChange}/>
                        <label htmlFor='기도송'>기도송</label>
                    </div>
                </div>
                <input className="music-video" value={newMusic.video} onChange={handleChange} name={'video'} placeholder={'video embedded url'} />
                <textarea className="music-des" value={newMusic.description} onChange={handleChange} name={'description'} placeholder={'description'} />
                <button className="addmusic-button" >Submit</button>
            </form>
        </div>
    )
}

export default MusicForm