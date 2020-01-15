import React from 'react'
import { connect } from 'react-redux'

import SearchBar from '../components/videos/SearchBar'
import VideoHeader from '../components/videos/VideoHeader'
// import youtube from '../apis/youtube'
import VideoList from '../components/videos/VideoList'
import VideoDetail from '../components/videos/VideoDetail'
import { onTermSubmit, onVideoSelect } from '../actions'


class VideosContainer extends React.Component {
    
    componentDidMount() {
        this.props.onTermSubmit('Python Tutorials')
    }

    render() {
        return (
            <div className="ui container">
                <VideoHeader />
                <SearchBar onFormSubmit={this.props.onTermSubmit} />
                <div className="ui grid">
                    <div className="row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.props.videos.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.props.onVideoSelect} videos={this.props.videos} />
                        </div>                     
                    </div>
                </div>                             
            </div>
        )
    }
}

const mapStateToProps = (state) => { 
    return { videos: state.videos }
}

// const mapDispatchToProps = (dispatch) => ({
//     onTermSubmit: term => onTermSubmit(term),
//     onVideoSelect: video => onVideoSelect(video)
// })

export default connect(mapStateToProps, { onTermSubmit, onVideoSelect })(VideosContainer)

// state = { videos: [], selectedVideo: null }


// onTermSubmit = async (term) => {
    //    const response = await youtube.get('/search', {
    //        params: {
    //            q: term
    //        }
    //    })

    //    this.setState({ 
    //        videos: response.data.items,
    //        selectedVideo: response.data.items[0] 
    //     })
    // }

    // onVideoSelect = (video) => {
    //    this.setState({ selectedVideo: video }) 
    // }


