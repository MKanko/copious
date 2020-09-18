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

export const createNote = (note) => {
    const params = JSON.stringify({ userId: note.userId, videoId: note.videoId, noteContent: note.content, videoTitle: note.title })
    return (dispatch) => {
        backend.post('/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: params
        })
        .then(response => response.json())
        .then(note => dispatch({ type: 'CREATE_NOTE', payload: note }))
    }
}

export const editNote = (noteId, note) => {
    const params = JSON.stringify({ userId: note.userId, videoId: note.videoId, noteContent: note.content })
    return (dispatch) => {
        backend.patch(`/notes/${noteId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: params
        })
        .then(response => response.json())
        .then(note => dispatch({ type: 'EDIT_NOTE', payload: note }))
    }
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

export const getNote = (noteId) => {    
    return (dispatch) => {     
        backend.get(`/notes/${noteId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(note => {  
            dispatch({ type: 'ADD_NOTE', payload: note })
        }) 
    }      
}

export const fetchNotes = () => {
    return (dispatch) => {
        backend.get('/notes', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(notes => dispatch({ type: 'ADD_NOTES', payload: notes }))
    }
}

export const deleteNote = (noteId) => {      
    return (dispatch) => {     
        backend.delete(`/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(note => {  
            dispatch({ type: 'DELETE_NOTE', payload: noteId })
        }) 
    }      
}







