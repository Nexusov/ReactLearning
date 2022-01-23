import React from 'react';
import Dialogs from './Dialogs';
import s from './Dialogs.module.css';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogs-reducer';
import StoreContext from '../../StoreContext';


export default function DialogsContainer() {
	return <StoreContext.Consumer> 
		{(store) => {	
		let state = store.getState().dialogsPage;

		let onSendMessageClick = () => {
			store.dispatch(sendMessageCreator())
		}
		
		let onNewMessageChange = (body) => {
			store.dispatch(updateNewMessageBodyCreator(body))
		}	 
		return <Dialogs 
					updateNewMessageBody = {onNewMessageChange} 
					sendMessage = {onSendMessageClick}
					dialogsPage = {state} /> 
		}}
	</StoreContext.Consumer>
};
