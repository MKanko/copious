import React from 'react'
import { connect } from 'react-redux'

import { fetchNotes } from '../actions'
import NoteHeader from '../components/notes/NoteHeader'
import NoteList from '../components/notes/NoteList'


// actions sending get requests to find note,  post requests to create or update a note are actions in the actions file


class NotesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchNotes()
    }

    render() {
        return (
            <div className="ui container">
                <NoteHeader /> 
                <NoteList notes={this.props.notes} /> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { notes: state.notes.notes }
}


export default connect(mapStateToProps, { fetchNotes })(NotesContainer) 