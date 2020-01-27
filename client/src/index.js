import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'

import App from './App'
import reducers from './reducers'
import './index.css'  

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose  
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
)

// composeEnhancers is Redux dev tools
// middleware - reduxThunk allows to run async functions that return actions that get dispatched to the reducers
// to update the store the the async function returns the action object. 

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.querySelector('#root')
) 