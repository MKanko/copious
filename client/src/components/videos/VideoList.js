import React from 'react'
import VideoItem from './VideoItem'



const VideoList = (props) => {
    const renderList = props.videos.map((video, index) => {
        return <VideoItem onVideoSelect={props.onVideoSelect} video={video} key={index} />
    })
    return (
        <div className="ui relaxed divided list">
            {renderList}  
        </div>
    )
}


export default VideoList 