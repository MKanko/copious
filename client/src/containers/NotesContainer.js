import React from 'react'
import { connect } from 'react-redux'


import NoteHeader from '../components/notes/NoteHeader'


class NotesContainer extends React.Component {
    render() {
        return (
            <div>
              <NoteHeader />                
            </div>
        )
    }
}


export default NotesContainer 