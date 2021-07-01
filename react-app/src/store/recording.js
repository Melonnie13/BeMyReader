//constants
const ADD_RECORDING = 'recording/ADD_RECORDING';


//action creators
const addRecording = (recording) => ({
    type: ADD_RECORDING,
    payload: recording
})

//thunks
export const uploadRecording = (formData) => async (dispatch) => {
    const res = await fetch ('/api/recordings', {
        method: 'POST',
        body: formData
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(addRecording(data));
    } else {
        console.log('error from upload recording thunk')
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
        default:
            return state;
    }
}
