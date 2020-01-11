import React from 'react'
import { Router, Route } from 'react-router-dom'

import SignIn from './components/SignIn'
import NoteList from './components/notes/NoteList'
import VideoShow from './components/VideoShow' 


const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>                
                    <Route path="/" exact component={SignIn} />
                    <Route path="/notes/list" exact component={NoteList} />
                    <Route path="/videos/show" exact component={VideoShow} />
                </div>
            </Router>
        </div>
    )
}


export default App 


