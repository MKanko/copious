import React from 'react'
import { connect } from 'react-redux'

import SearchBar from '../components/videos/SearchBar'
import VideoHeader from '../components/videos/VideoHeader'
import youtube from '../apis/youtube'


class VideosContainer extends React.Component {
    state = { videos: [] }

    onTermSubmit = async (term) => {
       const response = await youtube.get('/search', {
           params: {
               q: term
           }
       })

       this.setState({ videos: response.data.items })
    }

    render() {
        return (
            <div>
                <VideoHeader />
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                I have {this.state.videos.length} videos
            </div>
        )
    }
}


export default VideosContainer 