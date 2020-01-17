import { combineReducers } from 'redux'
import authReducer from './authReducer'
import videoReducer from './videoReducer'
import noteReducer from './noteReducer'
import { reducer as formReducer } from 'redux-form'



export default combineReducers({
    auth: authReducer,
    videos: videoReducer,
    notes: noteReducer,
    form: formReducer  
})