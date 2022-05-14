import { getMouseEventOptions } from "@testing-library/user-event/dist/utils"
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
    console.log(id)

    let navigate = useNavigate()

    const handleChange = (e) => {
        setNewMusic({...newMusic, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await CreateMusic(newMusic)
        props.setindUserMusic([...props.indUserMusic,newMusic])
        setCategories([])
        setNewMusic('')
        navigate('/mymusic')
        
    }

    const optionHandleChange = (e) => {
        let options = e.target.value
        console.log(typeof options)
        setCategories([...categories, options])
    }

    console.log(categories)

    return (
        <div>
            <h2>Add New Music</h2>
            <form onSubmit={handleSubmit}>
                <input value={newMusic.title} onChange={handleChange} name={'title'} placeholder={'title'} />
                <div>
                    <label>Category:</label>
                    <div>
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
                <input value={newMusic.video} onChange={handleChange} name={'video'} placeholder={'video'} />
                <input value={newMusic.description} onChange={handleChange} name={'description'} placeholder={'description'} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default MusicForm