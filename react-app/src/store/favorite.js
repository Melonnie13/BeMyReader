// constants

const GET_FAVORITES = 'favorite/GET_FAVORITES';

// action creators

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
        default:
            return state;
    }
};
