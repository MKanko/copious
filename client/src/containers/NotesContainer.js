import React from 'react'
// import { connect } from 'react-redux'


import NoteHeader from '../components/notes/NoteHeader'


// actions sending get requests to find not,  post requests to create or update a note are actions in the actions file


class NotesContainer extends React.Component {
    render() {
        return (
            <div className="ui container">
              <NoteHeader />                
            </div>
        )
    }
}


export default NotesContainer 