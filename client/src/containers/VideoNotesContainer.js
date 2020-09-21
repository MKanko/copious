import React from 'react'
import { connect } from 'react-redux'

import NoteDetail from '../components/notes/NoteDetail'
import { fetchNote } from '../actions'


class VideoNotesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchNote(this.props.userId, this.props.videoId) 
    }

    componentDidUpdate(prevProps) {
        if(this.props.userId !== prevProps.userId || this.props.videoId !== prevProps.videoId) {
            this.props.fetchNote(this.props.userId, this.props.videoId)
        }      
    }

    render() {
        return (
            <div className="ui container">
              <NoteDetail note={this.props.note} userId={this.props.userId} videoId={this.props.videoId} videoTitle={this.props.videoTitle} message={this.props.message} />                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        videoId: state.videos.selectedVideo.id.videoId,
        note: state.notes.selectedNote,
        videoTitle: state.videos.selectedVideo.snippet.title,
        message: state.notes.message  
    }
}

export default connect(mapStateToProps, { fetchNote })(VideoNotesContainer) 