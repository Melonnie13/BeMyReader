// constants

const SET_CATEGORIES = 'category/SET_CATEGORIES';

// action creators

const setCategories = (category) => ({
    type: SET_CATEGORIES,
    payload: category
});

// thunks

export const renderCategories = () => async(dispatch) => {
    const res = await fetch('/api/categories');
    if (res.ok) {
        const data = await res.json();
        dispatch(setCategories(data));
    }
};

// initial state

const initialState = {};

// reducer

export default function reducer(state = initialState, action){
    const newState = {...state}
    switch (action.type){
        case SET_CATEGORIES:
            return {
                ...action.payload
            }
        default:
            return state;
    }
};
