export default (state = { notes: [], selectedNote: null, requesting: false }, action) => {
    switch (action.type) {
        case 'LOAD_NOTE':
            return { ...state, requesting: true }

        case 'ADD_VIDEO_NOTE':
            return { ...state, selectedNote: action.payload, requesting: false }

        case 'CREATE_NOTE':
            return { ...state, selectedNote: action.payload }

        case 'EDIT_NOTE':
            return { ...state, selecetdNote: action.payload }

        case 'ADD_NOTES':
            return { ...state, notes: action.payload }

        case 'ADD_NOTE':
            return { ...state, note: action.payload }

        default:
            return state 
    }

}