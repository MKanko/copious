import React from 'react'
import NoteItem from './NoteItem'
 

const NoteList = (props) => {
    let selectedNotes
    let renderNotes

    if (props.notes.data) {
        selectedNotes = props.notes.data.filter((note) => {
            return note.attributes.user_id === props.userId                
        })

        renderNotes = selectedNotes.map((note) => {
            return <NoteItem note={note} key={note.id} deleteNote={props.deleteNote} />
        })
    }
     
    return (
        <div className="ui text container">
            {renderNotes}
        </div>
    )
}


export default NoteList 







