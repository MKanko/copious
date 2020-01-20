import { combineReducers } from 'redux'
import authReducer from './authReducer'
import videoReducer from './videoReducer'
import noteReducer from './noteReducer'
import { reducer as formReducer } from 'redux-form'


const appReducer = combineReducers({
    auth: authReducer,
    videos: videoReducer,
    notes: noteReducer,
    form: formReducer 
  })
  
const rootReducer = (state, action) => {
    if (action.type === 'SIGN_OUT') {
      state = undefined
    }
  
    return appReducer(state, action)
  }

export default rootReducer 