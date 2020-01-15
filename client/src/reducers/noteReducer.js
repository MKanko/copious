
export default (state = { notes: [], selectedNote: null, requesting: false }, action) => {
    switch (action.type) {
        case 'LOAD_NOTE':
            return { ...state, notes: [...state.notes], requesting: true }

        case 'ADD_NOTE':
            return { ...state, selectedNote: action.payload, requesting: false }

        default:
            return state 
    }

}