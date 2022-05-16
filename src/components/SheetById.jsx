import { useState, useEffect } from "react"
import { GetIndMusicsheet } from "../services/MusicServices"
import { useParams } from "react-router-dom"


const SheetById = () => {
    const [sheet, setSheet] = useState()
    let {id} = useParams()

useEffect(() => {
    const getSheet = async (req, res) => {
        const data = await GetIndMusicsheet(id)
        setSheet(data)
    }
    getSheet()
}, [])

console.log(sheet)

    return (sheet) ? (
        <div>
            <h1>{sheet.title}</h1>
            <h5>Key: {sheet.key}</h5>
            <img src={sheet.image}/>
        </div>
    ) : (
        <div></div>
    )
}

export default SheetById

//back button to musicdetails
//download sheet image