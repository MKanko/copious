import React from 'react'
import { connect } from 'react-redux'

import NoteDetail from '../components/notes/NoteDetail'
import { fetchNote } from '../actions'


class VideoNotesContainer extends React.Component {

    componentDidMount() {
        const noteId = this.props.userId + '-' + this.props.videoId
        this.props.fetchNote(noteId)
    }

    render() {
        return (
            <div className="ui container">
              <NoteDetail />                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        videoId: state.videos.selectedVideo.id.videoId
    }
}

// const mapDispatchToProps = (dispatch) => {

// }


export default connect(mapStateToProps, { fetchNote })(VideoNotesContainer) 