import React from 'react'
import { connect } from 'react-redux'

import SearchBar from '../components/videos/SearchBar'
import VideoHeader from '../components/videos/VideoHeader'


class VideosContainer extends React.Component {
    
    render() {
        return (
            <div>
                <VideoHeader />
                <SearchBar />
            </div>
        )
    }
}


export default VideosContainer 