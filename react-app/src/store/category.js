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
        dispatch(setCategories(data.categories));
    }
}

// initial state

const initialState = {};

// reducer

export default function reducer(state = initialState, action){
    switch (action.type){
        case SET_CATEGORIES:
            const all_categories = {};
            action.payload.forEach(category => {
                all_categories[category.id] = category;
            })
            return all_categories;
        default:
            return state;
    }
}
