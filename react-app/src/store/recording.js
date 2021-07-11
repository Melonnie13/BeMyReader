//constants
const ADD_RECORDING = 'recording/ADD_RECORDING';
const SET_ONE_RECORDING = 'recording/SET_ONE_RECORDING';
const DELETE_ONE_RECORDING = 'recording/DELETE_ONE_RECORDING';
const GET_RECORDINGS = 'recording/GET_RECORDINGS';

//action creators
const addRecording = (recording) => ({
    type: ADD_RECORDING,
    payload: recording
});

const setOneRecording = (recording) => ({
    type: SET_ONE_RECORDING,
    payload: recording
});

const deleteOneRecording = (recording) => ({
    type: DELETE_ONE_RECORDING,
    payload: recording
});

const getUserRecordings = (recordings) => ({
    type: GET_RECORDINGS,
    payload: recordings
});

const getAllRecordings = (recordings) => ({
    type: GET_RECORDINGS,
    payload: recordings
});

//thunks
export const uploadRecording = (formData) => async (dispatch) => {
    // console.log(formData, 'FORM DATA FROM RECORDING THUNK$$$$$$$$$$$$$$$$$$$$$$$$$')
    const res = await fetch ('/api/recordings/new', {
        method: 'POST',
        // headers: {
        //     'Content-Type': 'application/JSON'
        // },
        body: formData
        // headers
    });
    if (res.ok) {
        // console.log(res, 'response from recording thunk********************')
        const data = await res.json();
        dispatch(addRecording(data));
    } else {
        console.log('error from upload recording thunk')
    }
};

export const renderOneRecording = (id) => async (dispatch) => {
    const res = await fetch(`/api/recordings/single/${id}`);

    if (res.ok) {
        const data = await res.json();
        dispatch(setOneRecording(data));
    } else {
        console.log('error from renderOneRecording thunk')
    }
};

export const deleteRecording = (id) => async (dispatch) => {
    const res = await fetch(`/api/recordings/${id}`, {
        method: 'DELETE',
        body: JSON.stringify(id)
    });
        if (res.ok){
            const deletedRecording = await res.json()
            dispatch(deleteOneRecording(deletedRecording))
            return deletedRecording;
        }
};

export const getUsersRecordings = (id) => async (dispatch) => {
    const res = await fetch(`/api/recordings/${id}`)
    if (res.ok) {
        // console.log('res is good in get recordings thunk')
        const recordings = await res.json();
        dispatch(getUserRecordings(recordings));
    }
};

export const getAllRecordingsSearch = () => async (dispatch) => {
    const res = await fetch('/api/recordings/all')
    if (res.ok) {
        const recordings = await res.json();
        dispatch(getAllRecordings(recordings));
    }
};

export const getAllRecordingsAlpha = () => async (dispatch) => {
    const res = await fetch('/api/recordings/alphabetical')
    if (res.ok) {
        const recordings = await res.json();
        dispatch(getAllRecordings(recordings));
    }
};

//initial state
const initialState = {}

//reducer
export default function reducer(state = initialState, action){
    const newState = {...state}
    switch (action.type) {
        case ADD_RECORDING:
            newState[action.payload.id] = action.payload
            return newState;
        case SET_ONE_RECORDING:
            return {
                ...action.payload
            };
        case GET_RECORDINGS:
            return {
                ...action.payload
            };
        case DELETE_ONE_RECORDING:
            delete newState[action.payload.id];
            return newState;
        default:
            return state;
    }
};
