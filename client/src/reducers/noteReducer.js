
export default (state = { notes: [], selectedNote: null, requesting: false }, action) => {
    switch (action.type) {
        case 'LOAD_NOTE':
            return { ...state, notes: [...state.notes], requesting: true }

        case 'ADD_NOTE':
            // debugger 
            return { ...state, selectedNote: action.payload, requesting: false }

        case 'CREATE_NOTE':
            return { ...state, createNote: action.payload }

        default:
            return state 
    }

}