import React from 'react'
import VideoNotesContainer from '../../containers/VideoNotesContainer'



const VideoDetail = (props) => {
    // console.log(props)
    if (!props.video) {
        return <div>Loading...</div>
    }
    
    const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`

    return (
        <div>
            <div className="ui embed">
                <iframe title="video-player" src={videoSrc} />
            </div>
            <div className="ui black segment">
                <h4 className="header">{props.video.snippet.title}</h4>
                <p>{props.video.snippet.description}</p>
            </div>
            <VideoNotesContainer />
        </div>
    )
}


export default VideoDetail 