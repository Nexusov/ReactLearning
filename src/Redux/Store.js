import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"

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

		sidebar: {
			
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

		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
		this._state.sidebar = sidebarReducer(this._state.sidebar, action)

		this._callSubscriber(this._state)  
	} 
}


/* В state мы не можем импортировать функцию renderEntireTree(_callSubscriber), но мы можем ее туда передать через subscribe, 
который вызывается в index.js. После чего, созданная функция renderEntireTree в state переопределяется на ту, 
которую мы передали в subscribe. И теперь, когда мы добавляем пост, в state вызывается эта функция renderEntireTree */

export default store;
