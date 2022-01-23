import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Dialogs from './Dialogs';
import s from './Dialogs.module.css';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogs-reducer';


export default function DialogsContainer(props) {

let state = props.store.getState().dialogsPage;

let onSendMessageClick = () => {
	props.store.dispatch(sendMessageCreator())
}

let onNewMessageChange = (body) => {
	props.store.dispatch(updateNewMessageBodyCreator(body))
}

	return (
		<Dialogs 
			updateNewMessageBody = {onNewMessageChange} 
			sendMessage = {onSendMessageClick}
			dialogsPage = {state} />
	);
}
