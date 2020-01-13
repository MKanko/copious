import React from 'react'
import VideoItem from './VideoItem'



const VideoList = (props) => {
    const renderList = props.videos.map((video) => {
        return <VideoItem video={video} />
    })
    return (
        <div>
            {renderList}  
        </div>
    )
}


export default VideoList 