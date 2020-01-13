
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

export const onTermSelect = () => {
    return {
        type: 'ON_TERM_SELECT',
        payload: Response.data.items
    }
}

export const onVideoSelect = () => {
    return {
        type: 'ON_VIDEO_SELECT',
        payload: video 
    }
}