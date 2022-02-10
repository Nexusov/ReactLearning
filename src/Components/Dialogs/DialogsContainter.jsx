import React from 'react';
import Dialogs from './Dialogs';
import s from './Dialogs.module.css';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogs-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
		isAuth: state.auth.isAuth
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: () => {
			dispatch(sendMessageCreator())
		},
		updateNewMessageBody: (body) => {
			dispatch(updateNewMessageBodyCreator(body))
		}
	}
}

/* connect возвращает нам новую контейнерную компоненту. 
Отрисовывется Dialogs-компонента и в нее заходят данные из объектов, которые 
возвращаются из mapStateToProps и mapDispatchToProps */
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer