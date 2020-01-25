import React from 'react'
import { Link } from 'react-router-dom'



const NoteItem = (props) => {
    console.log(props)
    return (
        <div className="ui tertiary center aligned segment">
            <Link to={`/notes/${props.note.id}`}>{props.note.attributes.title}</Link> 
        </div>
    )
}


export default NoteItem 