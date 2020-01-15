import React from 'react'
import { Router, Route } from 'react-router-dom'
import history from './history'

import SignIn from './components/SignIn'
import NotesContainer from './containers/NotesContainer'
import VideosContainer from './containers/VideosContainer'


const App = () => {
    return (
        <div>
            <Router history={history}>
                <div>                
                    <Route path="/" exact component={SignIn} />
                    <Route path="/notes/list" exact component={NotesContainer} />
                    <Route path="/videos/show" exact component={VideosContainer} />
                </div>
            </Router>
        </div>
    )
}


export default App 


