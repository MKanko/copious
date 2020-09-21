export default (state = { notes: [], selectedNote: null, requesting: false, message: '' }, action) => {
    switch (action.type) {
        case 'LOAD_NOTE':
            return { ...state, requesting: true }

        case 'ADD_VIDEO_NOTE':
            return { ...state, selectedNote: action.payload, requesting: false }

        case 'CREATE_NOTE':
            return { ...state, selectedNote: action.payload, message: 'Note created successfully.' + Date(Date.now).toString() }

        case 'EDIT_NOTE':
            return { ...state, selectedNote: action.payload, message: 'Note updated successfully.' + Date(Date.now).toString() }

        case 'ADD_NOTES':
            return { ...state, notes: action.payload }

        case 'ADD_NOTE':
            return { ...state, note: action.payload }

        case 'DELETE_NOTE':
            return { ...state, notes: { 
                    data: state.notes.data.filter(note => {
                        return note.id !== action.payload 
                    })
                }
            }

        default:
            return state 
    }

}