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