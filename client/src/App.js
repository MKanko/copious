import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import SignIn from './components/SignIn'
import NoteList from './components/notes/NoteList'
import VideoShow from './components/videos/VideoShow'


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={SignIn} />
                    <Route path="/notes/list" exact component={NoteList} />
                    <Route path="/videos/show" exact component={VideoShow} />
                </div>
            </BrowserRouter>
        </div>
    )
}


export default App 