const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
        posts: [
            { id: 1, message: 'Hello World!', likesCount: 0 },
            { id: 2, message: 'My first post', likesCount: 23 },
            { id: 3, message: 'Blabla', likesCount: 2 },
            { id: 4, message: 'Da', likesCount: 1 },
        ],

        newPostText: 'Write a new post here'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }

        default: 
            return state;
    }
}

// export const addPostActionCreator = () => ({type: ADD_POST}) короткая запись без return
export const addPostActionCreator = () => {
	return {
		type: ADD_POST
	}
}

export const updateNewPostTextActionCreator = (text) => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		newText: text
	}
}

export default profileReducer;