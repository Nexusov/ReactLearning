const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'


let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Hello World!', likesCount: 0 },
				{ id: 2, message: 'My first post', likesCount: 23 },
				{ id: 3, message: 'Blabla', likesCount: 2 },
				{ id: 4, message: 'Da', likesCount: 1 },
			],
	
			newPostText: 'Write a new post here'
		},
	
		dialogsPage: {
			messages: [
				{ id: 1, message: 'Hi' },
				{ id: 2, message: 'Where are you' },
				{ id: 3, message: 'Bye' },
				{ id: 4, message: 'I need your bike, bro' },
				{ id: 5, message: 'Who did it ?' },
				{ id: 6, message: 'Hei, snakker du norsk ?' },
			],

			dialogs: [
				{ id: 1, name: 'Yegor' },
				{ id: 2, name: 'Marshak' },
				{ id: 3, name: 'Ansimist' },
				{ id: 4, name: 'Kirill' },
				{ id: 5, name: 'Sito' },
				{ id: 6, name: 'Mag7' },
			],

			newMessageBody: ""
		}
	},

	_callSubscriber() {
		console.log ('')
	},

	getState() {
		return this._state
	},

	subscribe(observer) {  
		this._callSubscriber = observer		  
	},
	
	dispatch (action) {
		if (action.type === ADD_POST) {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCount: 0,
			}
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = ''
			this._callSubscriber(this._state)
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText
			this._callSubscriber(this._state)
		} else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
			this._state.dialogsPage.newMessageBody = action.body
			this._callSubscriber(this._state)
		} else if (action.type === SEND_MESSAGE) {
			let body = this._state.dialogsPage.newMessageBody 
			this._state.dialogsPage.newMessageBody  = ''
			this._state.dialogsPage.messages.push ({ id: 7, message: body });  
			this._callSubscriber(this._state)  
		}
	} 
}


// export const addPostActionCreator = () => ({type: ADD_POST}) короткая запись без return
export const addPostActionCreator = () => {
	return {
		type: ADD_POST
	}
}

export const sendMessageCreator = () => {
	return {
		type: SEND_MESSAGE
	}
}

export const updateNewPostTextActionCreator = (text) => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		newText: text
	}
}

export const updateNewMessageBodyCreator = (body) => {
	return {
		type: UPDATE_NEW_MESSAGE_BODY,
		body: body
	}
}

/* В state мы не можем импортировать функцию renderEntireTree(_callSubscriber), но мы можем ее туда передать через subscribe, 
который вызывается в index.js. После чего, созданная функция renderEntireTree в state переопределяется на ту, 
которую мы передали в subscribe. И теперь, когда мы добавляем пост, в state вызывается эта функция renderEntireTree */

export default store;
