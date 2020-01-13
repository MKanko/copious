

export default (state = {}, action) => {
    switch (action.type) {
        case '  ON_TERM_SUBMIT':
            return { ...state, videos: response.data.items, selectedVideo: response.data.items[0]}
        case 'ON_VIDEO_SELECT':
            return { ...state, selectedVideo: video}
        default:
            return state 
    }
}