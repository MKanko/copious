import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from '../GoogleAuth'

const VideoHeader = () => {
    return (
        <div className="ui secondary pointing menu">
            <h5>Tutorials</h5>
            {/* <div className="ui category search item">
                <div className="ui transparent icon input">
                    <input class="prompt" type="text" placeholder="Search Videos" />
                    <i class="search link icon"></i> 
                </div>
            </div> */}
            <div className="right menu">
                <Link to="/notes/list" className="item">
                    Notes List 
                </Link>
                <GoogleAuth />
            </div>
        </div>
    )
}


export default VideoHeader