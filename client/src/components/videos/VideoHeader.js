import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from '../GoogleAuth'
import SearchBar from './SearchBar'

const VideoHeader = (props) => {
    return (
        <div className="ui secondary pointing mini menu">
            <div className="ui large header item">Copious</div>                     
            <SearchBar onFormSubmit={props.onFormSubmit} />
            <div className="right menu">     
                <div className="ui large item">        
                    <Link to="/notes/list" className="ui medium header item">
                        Notes List 
                    </Link>
                </div>
                <div className="ui large item">
                    <GoogleAuth />
                </div>
            </div>
        </div>
    )
}


export default VideoHeader