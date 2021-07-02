//constants
const ADD_RECORDING = 'recording/ADD_RECORDING';
const SET_ONE_RECORDING = 'recording/SET_ONE_RECORDING';


//action creators
const addRecording = (recording) => ({
    type: ADD_RECORDING,
    payload: recording
});

const setOneRecording = (recording) => ({
    type: SET_ONE_RECORDING,
    payload: recording
});

//thunks
export const uploadRecording = (formData) => async (dispatch) => {
    const res = await fetch ('/api/recordings/new', {
        method: 'POST',
        body: formData
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(addRecording(data));
    } else {
        console.log('error from upload recording thunk')
    }
};

export const renderOneRecording = (id) => async (dispatch) => {
    const res = await fetch(`/api/recordings/${id}`);

    if (res.ok) {
        const data = await res.json();
        dispatch(setOneRecording(data));
    } else {
        console.log('error from renderOneRecording thunk')
    }
}

//initial state
const initialState = {recordings: {}}

//reducer
export default function reducer(state = initialState, action){
    switch (action.type) {
        case ADD_RECORDING:
            return {
                recordings: action.payload
            }
            case SET_ONE_RECORDING:
                return {
                    recordings: action.payload
                }
        default:
            return state;
    }
}
