import React from 'react'
import { connect } from 'react-redux'

import SearchBar from '../components/videos/SearchBar'
import VideoHeader from '../components/videos/VideoHeader'
import youtube from '../apis/youtube'
import VideoList from '../components/videos/VideoList'
import VideoDetail from '../components/videos/VideoDetail'


class VideosContainer extends React.Component {
    state = { videos: [], selectedVideo: null }

    onTermSubmit = async (term) => {
       const response = await youtube.get('/search', {
           params: {
               q: term
           }
       })

       this.setState({ videos: response.data.items })
    }

    onVideoSelect = (video) => {
       this.setState({ selectedVideo: video }) 
    }

    render() {
        return (
            <div>
                <VideoHeader />
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        )
    }
}


export default VideosContainer 