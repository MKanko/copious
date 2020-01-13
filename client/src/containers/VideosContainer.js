import React from 'react'
import { connect } from 'react-redux'

import SearchBar from '../components/videos/SearchBar'
import VideoHeader from '../components/videos/VideoHeader'
import youtube from '../apis/youtube'
import VideoList from '../components/videos/VideoList'


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
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}


export default VideosContainer 