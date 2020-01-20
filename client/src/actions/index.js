import youtube from '../apis/youtube'


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
    const params = JSON.stringify({ userId: note.userId, videoId: note.videoId, noteContent: note.content })
    return (dispatch) => {
        // dispatch({ type: 'CREATE_NOTE'})
        fetch('http://localhost:3001/notes', {
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
        // dispatch({ type: 'EDIT_NOTE'})
        fetch(`http://localhost:3001/notes/${noteId}`, {
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
    const url = new URL('http://localhost:3001/notes/note')
    const params = { videoId, userId }
    url.search = new URLSearchParams(params).toString()
    return (dispatch) => {
        // dispatch({ type: 'LOAD_NOTE'})
        fetch(url)
        .then(response => response.json())
        .then(note => dispatch({ type: 'ADD_NOTE', payload: note })) 
    }
       
}



