import React from 'react'
import { connect } from 'react-redux'

import NoteDetail from '../components/notes/NoteDetail'
import { fetchNote, createNote } from '../actions'


class VideoNotesContainer extends React.Component {

    componentDidUpdate(prevProps) {
        if(this.props.userId !== prevProps.userId) {
            const noteId = this.props.userId + '-' + this.props.videoId
            this.props.fetchNote(noteId)
        }      
    }

    render() {
        return (
            <div className="ui container">
              <NoteDetail note={ this.props.note } />                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        videoId: state.videos.selectedVideo.id.videoId,
        note: state.notes.selectedNote 
    }
}

// const mapDispatchToProps = (dispatch) => {

// }


export default connect(mapStateToProps, { fetchNote, createNote })(VideoNotesContainer) 