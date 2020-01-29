import React from 'react'
import { connect } from 'react-redux'

import VideoHeader from '../components/videos/VideoHeader'
import VideoList from '../components/videos/VideoList'
import VideoDetail from '../components/videos/VideoDetail'
import { onTermSubmit, onVideoSelect } from '../actions'


class VideosContainer extends React.Component {
    
    componentDidMount() {
        const title = this.props.location.state ? this.props.location.state.title : 'Climbing Lessons'
        this.props.onTermSubmit(title)
    }

    render() {
        return (
            <div className="ui container">
                <VideoHeader onFormSubmit={this.props.onTermSubmit} />
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

export default connect(mapStateToProps, { onTermSubmit, onVideoSelect })(VideosContainer)




