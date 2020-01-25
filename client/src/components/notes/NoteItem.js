import React from 'react'
import { Link } from 'react-router-dom'



const NoteItem = (props) => {
    console.log(props)
    return (
        <div>
            <Link to={`/notes/${props.note.id}`}>{props.note.attributes.title}</Link> 
        </div>
    )
}


export default NoteItem 