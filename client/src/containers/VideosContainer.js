import React from 'react'
import { connect } from 'react-redux'

import SearchBar from '../components/videos/SearchBar'
import VideoHeader from '../components/videos/VideoHeader'


class VideosContainer extends React.Component {
    onTermSubmit = (term) => {

    }

    render() {
        return (
            <div>
                <VideoHeader />
                <SearchBar onFormSubmit={this.onTermSubmit}/>
            </div>
        )
    }
}


export default VideosContainer 