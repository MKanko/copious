import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from '../GoogleAuth'

const NoteHeader = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/videos/show" className="item">
                Videos 
            </Link>
            <div className="right menu">
                <GoogleAuth />
            </div>
        </div>
    )
}


export default NoteHeader