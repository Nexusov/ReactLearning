import { profileAPI, usersAPI } from '../API/api';


const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
        posts: [
            { id: 1, message: 'Hello World!', likesCount: 0 },
            { id: 2, message: 'My first post', likesCount: 23 },
            { id: 3, message: 'Blabla', likesCount: 2 },
            { id: 4, message: 'Da', likesCount: 1 },
        ],

        profile: null,
        status: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        default: 
            return state;
    }
}

// export const addPostActionCreator = () => ({type: ADD_POST}) короткая запись без return
export const addPostActionCreator = (newPostText) => {
	return {
		type: ADD_POST,
        newPostText
	}
}

export const setUserProfile = (profile) => {
	return {
		type: SET_USER_PROFILE,
		profile
	}
}

export const setStatus = (status) => {
	return {
		type: SET_STATUS,
		status
	}
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
        dispatch(setStatus(response.data));
    });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
}

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then((response) => {
        dispatch(setUserProfile(response.data));
    });
}


export default profileReducer;