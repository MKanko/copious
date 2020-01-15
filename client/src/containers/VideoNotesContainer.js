import React from 'react'
import { connect } from 'react-redux'

import NoteDetail from '../components/notes/NoteDetail'


class VideoNotesContainer extends React.Component {

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


export default connect(mapStateToProps)(VideoNotesContainer) 