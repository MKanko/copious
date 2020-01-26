import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from './history'

import SignIn from './components/SignIn'
import NotesContainer from './containers/NotesContainer'
import VideosContainer from './containers/VideosContainer'
import NoteShow from './components/notes/NoteShow'


const App = () => {
    return (
        <div className="ui container" style={{ padding: '50px'}}>
            <div className="ui segment" style={{ backgroundColor: '#D1D1D1' }}>
                <Router history={history}>
                    <Switch>                
                        <Route path="/" exact component={SignIn} />
                        <Route path="/notes/list" exact component={NotesContainer} />
                        <Route path="/videos/show" exact component={VideosContainer} />
                        <Route path="/notes/:id" exact component={NoteShow} />
                    </Switch>
                </Router>
            </div>
        </div>
    )
}


export default App 


