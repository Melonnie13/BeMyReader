// constants
const ADD_FAVORITE = 'favorite/ADD_FAVORITE';
const GET_FAVORITES = 'favorite/GET_FAVORITES';

// action creators

const addFavorite = (favorite) => ({
    type: ADD_FAVORITE,
    payload: favorite
})

const getFavorites = (favorites) => ({
    type: GET_FAVORITES,
    payload: favorites
});

// thunks

export const getAllFavorites = () => async (dispatch) => {
    const res = await fetch('/api/favorites/all')
    if (res.ok) {
        const favorites = await res.json();
        dispatch(getFavorites(favorites));
    }
};

export const newFavorite = (formData) => async (dispatch) => {
    const res = await fetch('/api/favorites/new', {
        method: 'POST',
        body: formData
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(addFavorite(data));
    } else {
        console.log('error from favorite thunk')
    }
};

// initial state

const initialState = {}

// reducer

export default function reducer(state = initialState, action){
    const newState = {...state}
    switch (action.type) {
        case GET_FAVORITES:
            return {
                ...action.payload
            };
        case ADD_FAVORITE:
            newState[action.payload] = action.payload
            return newState;
        default:
            return state;
    }
};
