import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { GetIndMusic } from "../services/MusicServices"

const MusicDetails = () => {
const [music, setMusic] = useState()

let {id} = useParams()
console.log(id)

useEffect(()=> {

}, [])

    return (
        <div>MusicDetails</div>
    )
}

export default MusicDetails


//show detail of each usermusics
//link to user
//link to musicsheet (sheetbyid)