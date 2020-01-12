import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from '../GoogleAuth'

const VideoHeader = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/notes/list" className="item">
                Notes List 
            </Link>
            <div className="right menu">
                <GoogleAuth />
            </div>
        </div>
    )
}


export default VideoHeader