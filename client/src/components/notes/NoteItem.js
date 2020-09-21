import React from 'react'
import { Link } from 'react-router-dom'



const NoteItem = (props) => {
    return (
        <div className="ui tertiary grey clearing segment">
            <Link to={`/notes/${props.note.id}`}>{props.note.attributes.title}</Link>
            <button 
                className="ui mini right floated black basic button" 
                onClick={() => props.deleteNote(props.note.id)}>
                Delete Note
            </button>             
        </div>
    )
}


export default NoteItem 