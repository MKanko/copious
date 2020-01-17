import React from 'react'
import { connect } from 'react-redux'

import NoteDetail from '../components/notes/NoteDetail'
import { fetchNote } from '../actions'


class VideoNotesContainer extends React.Component {

    componentDidUpdate(prevProps) {
        if(this.props.userId !== prevProps.userId || this.props.videoId !== prevProps.videoId) {
            // const noteId = this.props.userId + '-' + this.props.videoId
            this.props.fetchNote(this.props.userId, this.props.videoId)
        }      
    }

    render() {
        return (
            <div className="ui container">
              <NoteDetail note={ this.props.note } userId={this.props.userId} videoId={this.props.videoId} />                
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


export default connect(mapStateToProps, { fetchNote })(VideoNotesContainer) 