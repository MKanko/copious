import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/notes/list" className="item">
                All Notes 
            </Link>
        </div>
    )
}


export default Header