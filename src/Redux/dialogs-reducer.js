const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			return {
				...state,
				newMessageBody: action.body
			};

		case SEND_MESSAGE:
			let body = state.newMessageBody;
			return {
				...state,
				newMessageBody: '',
				messages: [...state.messages, {id: 7, message: body} ]
			};
			
		default:
			return state;
	}
};

export const sendMessageCreator = () => {
	return {
		type: SEND_MESSAGE
	}
}

export const updateNewMessageBodyCreator = (body) => {
	return {
		type: UPDATE_NEW_MESSAGE_BODY,
		body: body
	}
}

export default dialogsReducer;
