//constants

const SET_COMMENTS = "comment/SET_COMMENTS";
const ADD_COMMENT = "comment/ADD_COMMENT";
const DELETE_COMMENT = "comment/DELETE_COMMENT";
const EDIT_COMMENT = 'comment/EDIT_COMMENT';

//action creators

const setComments = (comment) => ({
    type: SET_COMMENTS,
    payload: comment,
});

const postComment = (comment) => ({
    type: ADD_COMMENT,
    payload: comment
});

const deleteComment = (comment) => ({
    type: DELETE_COMMENT,
    payload: comment
});

const editComment = (comment) => ({
    type: EDIT_COMMENT,
    payload: comment
 });

 //thunks

export const renderRecordingComments = (recording_id) => async (dispatch) => {
    const res = await fetch(`/api/comments/${recording_id}`);
    if (res.ok) {
      const data = await res.json();
      dispatch(setComments(data));
    //   console.log(data, 'DATA FROM THUNK**************************')
    }
  };

export const addComment = (formData) => async (dispatch) => {
    const res = await fetch("/api/comments/new", {
        method: 'POST',
        body: formData
    });
    if (res.ok) {
        const addedComment = await res.json();
        dispatch(postComment(addedComment));
        return addedComment;
      }
};

export const deleteOneComment = (id) => async (dispatch) => {
    const res = await fetch(`/api/comments/delete/${id}`, {
        method:"DELETE",
        body: JSON.stringify(id)
    })
    if(res.ok) {
        const deletedComment = await res.json()
        dispatch(deleteComment(deletedComment))
        return deletedComment;
    }
};

export const updateComment = (formData, comment_id) => async (dispatch) => {
    const res = await fetch(`/api/comments/update/${comment_id}`, {
        method:"PUT",
        body: formData
    })
    if(res.ok) {
        const editedComment = await res.json()
        dispatch(editComment(editedComment))
        return editedComment;
    }
};

// TO STUDY LATER!!!!!

// export const updateComment = (body, comment_id) => async (dispatch) => {
//     const res = await fetch(`/api/comments/update/${comment_id}`, {
//         method:"PATCH",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             body,
//             updated_at: new Date()
//         })
//     });
//     if(res.ok) {
//         const editedComment = await res.json()
//         dispatch(editComment(editedComment))
//         return editedComment;
//     }
// };

// reducer

const initialState = {};

export default function reducer(state = initialState, action) {
    const newState = {...state}
    switch (action.type) {
        case SET_COMMENTS:
            return {...action.payload};
        case ADD_COMMENT:
            newState[action.payload.id] = action.payload
            return newState;
        case DELETE_COMMENT:
            delete newState[action.payload.id]
            return newState;
        case EDIT_COMMENT:
            newState[action.payload.id] = action.payload
            return newState;
        default:
            return state;
    }
};
