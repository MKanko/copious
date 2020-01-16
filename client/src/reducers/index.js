import { combineReducers } from 'redux'
import authReducer from './authReducer'
import videoReducer from './videoReducer'
import noteReducer from './noteReducer'



export default combineReducers({
    auth: authReducer,
    videos: videoReducer,
    notes: noteReducer  
})