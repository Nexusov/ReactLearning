import {rerenderEntireTree} from '../render'

let state = {
	profilePage: {
		posts: [
			{ id: 1, message: 'Hello World!', likesCount: 0 },
			{ id: 2, message: 'My first post', likesCount: 23 },
			{ id: 3, message: 'Blabla', likesCount: 2 },
			{ id: 4, message: 'Da', likesCount: 1 },
		],
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
    }
};

export let addPost = (postMessage) => {
	let newPost = {
		id: 5,
		message: postMessage,
		likesCount: 0,
	}
	state.profilePage.posts.push(newPost);
	rerenderEntireTree(state)
}

export default state;