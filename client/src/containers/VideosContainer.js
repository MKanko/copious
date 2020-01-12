import React from 'react'
import { connect } from 'react-redux'

import SearchBar from '../components/videos/SearchBar'
import VideoHeader from '../components/videos/VideoHeader'
import youtube from '../apis/youtube'


class VideosContainer extends React.Component {
    onTermSubmit = async (term) => {
       const response = await youtube.get('/search', {
           params: {
               q: term
           }
       })
     
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