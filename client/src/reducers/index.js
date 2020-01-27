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


// when a user was signing out, state was not resetting. State was being held over after user sign out and affecting the functionality on next sign in.
// So added a root reducer to check to see if a user is 
// signing out and sets state to undefined if that's the case.
// the appReducer then handles the combineReducers and all other state.