// constants

const ADD_FAVORITE = 'favorite/ADD_FAVORITE';
const GET_FAVORITES = 'favorite/GET_FAVORITES';
const DELETE_FAVORITE = 'favorite/DELETE_FAVORITE';
const SET_FAVORITE = 'favorite/SET_FAVORITE';
const GET_ONE_FAVORITE = 'favorite/GET_ONE_FAVORITE';

// action creators

const addFavorite = (favorite) => ({
    type: ADD_FAVORITE,
    payload: favorite
});

const getFavorites = (favorites) => ({
    type: GET_FAVORITES,
    payload: favorites
});

const getUserFavorites = (favorites) => ({
    type: GET_FAVORITES,
    payload: favorites
});

const deleteFavorite = (favorite) => ({
    type: DELETE_FAVORITE,
    payload: favorite
});

const setOneFavorite = (favorite) => ({
    type: SET_FAVORITE,
    payload: favorite
});

const getFavorite = (favorite) => ({
    type: GET_ONE_FAVORITE,
    payload: favorite
})

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

export const getUsersFavorites = (id) => async (dispatch) => {
    const res = await fetch(`/api/favorites/user/${id}`)
    if (res.ok) {
        const favorites = await res.json();
        dispatch(getUserFavorites(favorites));
    }
};

export const deleteOneFavorite = (id) => async (dispatch) => {
    const res = await fetch(`/api/favorites/delete/${id}`, {
        method: 'DELETE',
        body: JSON.stringify(id)
    })
    if(res.ok) {
        const deletedFavorite = await res.json()
        dispatch(deleteFavorite(deletedFavorite))
        return deletedFavorite;
    }
};

export const setRecordingFavorite = (formData) => async (dispatch) => {
    const res = await fetch ('/api/favorites/recording', {
        method: 'POST',
        body: formData
    })
    if (res.ok) {
        const favoriteWithRecording = await res.json();
        dispatch(setOneFavorite(favoriteWithRecording))
    }
};

export const renderOneFavorite = (id) => async (dispatch) => {
    const res = await fetch(`/api/favorites/${id}`);

    if (res.ok) {
        const data = await res.json();
        dispatch(getFavorite(data))
    } else {
        console.log('error from renderOneFavorite thunk')
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
        case GET_ONE_FAVORITE:
            return {
                ...action.payload
            }
        case ADD_FAVORITE:
            newState[action.payload] = action.payload
            return newState;
        case DELETE_FAVORITE:
            delete newState[action.payload.id]
            return newState;
        case SET_FAVORITE:
            return {
                ...action.payload
            }
        default:
            return state;
    }
};
