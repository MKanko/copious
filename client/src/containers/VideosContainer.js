import React from 'react'
// import { connect } from 'react-redux'

import SearchBar from '../components/videos/SearchBar'
import VideoHeader from '../components/videos/VideoHeader'
import youtube from '../apis/youtube'
import VideoList from '../components/videos/VideoList'
import VideoDetail from '../components/videos/VideoDetail'


class VideosContainer extends React.Component {
    state = { videos: [], selectedVideo: null }

    componentDidMount() {
        this.onTermSubmit('Ruby Tutorials')
    }

    onTermSubmit = async (term) => {
       const response = await youtube.get('/search', {
           params: {
               q: term
           }
       })

       this.setState({ 
           videos: response.data.items,
           selectedVideo: response.data.items[0] 
        })
    }

    onVideoSelect = (video) => {
       this.setState({ selectedVideo: video }) 
    }

    render() {
        return (
            <div className="ui container">
                <VideoHeader />
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>                     
                    </div>
                </div>
                               
            </div>
        )
    }
}


export default VideosContainer 