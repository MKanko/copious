import React from 'react'
import { Link } from 'react-router-dom'
// import GoogleAuth from '../GoogleAuth'

const NoteHeader = () => {
    return (
        <div className="ui secondary pointing menu">
            <h5>Notes</h5>
            <div className="right menu">
                <Link to="/videos/show" className="item">
                    Tutorials/Sign Out 
                </Link>
            </div>           
            {/* <div className="right menu">
                <GoogleAuth />
            </div> */}
        </div>
    )
}


export default NoteHeader