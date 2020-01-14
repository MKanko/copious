

export default (state = { videos: [], selectedVideo: null }, action) => {
    console.log(action)
    switch (action.type) {

        case 'ON_TERM_SUBMIT':
            
            return { ...state, videos: action.payload, selectedVideo: action.payload[0] }

        case 'ON_VIDEO_SELECT':
            return { ...state, selectedVideo: action.payload.video }

        default:
            return state 
    }
}

