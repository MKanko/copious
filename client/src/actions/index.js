import youtube from '../apis/youtube'
import backend from '../apis/backend'


export const signIn = (userId) => {
    return {
        type: 'SIGN_IN',
        payload: userId 
    }   
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}

export const onTermSubmit = (term) => async dispatch => {
    const response = await youtube.get('/search', { params: { q: term }})    
    dispatch({
        type: 'ON_TERM_SUBMIT',
        payload: response.data.items
    })
}

export const onVideoSelect = (video) => {
    return {
        type: 'ON_VIDEO_SELECT',
        payload: video 
    }
}

export const createNote = (note) => async dispatch => {
    const params = JSON.stringify({ userId: note.userId, videoId: note.videoId, noteContent: note.content, videoTitle: note.title })
    const response = await backend.post('/notes', params)        
    dispatch({ type: 'CREATE_NOTE', payload: response.data.note })
}

export const editNote = (noteId, note) => async dispatch => {
    const params = JSON.stringify({ userId: note.userId, videoId: note.videoId, noteContent: note.content })
    const response = await backend.patch(`/notes/${noteId}`, params)
    dispatch({ type: 'EDIT_NOTE', payload: response.data.note })
}

export const fetchNote = (userId, videoId) => {
    const url = new URL('http://api.copious-app.com/video-note')
    const params = { videoId, userId }
    url.search = new URLSearchParams(params).toString()
    return (dispatch) => {
        fetch(url)
        .then(response => response.json())
        .then(note => dispatch({ type: 'ADD_VIDEO_NOTE', payload: note })) 
    }      
}

export const getNote = (noteId) => async dispatch => {      
    const response = await backend.get(`/notes/${noteId}`)
    dispatch({ type: 'ADD_NOTE', payload: response.data.note })     
}

export const fetchNotes = () => async dispatch => {
    const response = await backend.get('/notes')
    dispatch({ type: 'ADD_NOTES', payload: response.data.notes })
}

export const deleteNote = (noteId) => async dispatch => {      
    const response = await backend.delete(`/notes/${noteId}`)
    dispatch({ type: 'DELETE_NOTE', payload: noteId })      
}







