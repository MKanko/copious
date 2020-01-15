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

export const fetchNote = (id) => {
    return (dispatch) => {
        dispatch({ type: 'LOAD_NOTE'})
        fetch(`localhost:3001/notes/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(note => dispatch({ type: 'ADD_NOTE', payload: note })) 
    }
       
}

// export function fetchAstronauts() {
//     return (dispatch) => {
//       dispatch({ type: 'START_ADDING_ASTRONAUTS_REQUEST' });
//       fetch('http://api.open-notify.org/astros.json')
//         .then(response => response.json())
//         .then(astronauts => dispatch({ type: 'ADD_ASTRONAUTS', astronauts }));
//     };
//   }

