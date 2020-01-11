import React from 'react'
import { connect } from 'react-redux'

import SearchBar from '../components/videos/SearchBar'

class VideosContainer extends React.Component {
    render() {
        return (
            <div>
                <SearchBar />
            </div>
        )
    }
}


export default VideosContainer 