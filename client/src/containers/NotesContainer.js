import React from 'react'

import { connect } from 'react-redux'

import { fetchNotes, deleteNote } from '../actions'
import NoteHeader from '../components/notes/NoteHeader'
import NoteList from '../components/notes/NoteList'

class NotesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchNotes()
    }

    render() {
        return ( 
            <div>
                <div className="ui container">
                    <NoteHeader /> 
                    <NoteList notes={this.props.notes} userId={this.props.userId} deleteNote={this.props.deleteNote} />
                </div>                               
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        notes: state.notes.notes, 
        userId: state.auth.userId 
    }
}


export default connect(mapStateToProps, { fetchNotes, deleteNote })(NotesContainer) 