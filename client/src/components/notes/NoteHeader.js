import React from 'react'
import { Link } from 'react-router-dom'


const NoteHeader = () => {
    return (
        <div className="ui secondary pointing menu">
            <h5>Your Notes</h5>
            <div className="right menu">
                <Link to="/videos/show" className="item">
                    Tutorials 
                </Link>
            </div>           
        </div>
    )
}


export default NoteHeader