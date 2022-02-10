import React from 'react';
import s from './Dialogs.module.css';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogs-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
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

let AuthRedirectComponent = withAuthRedirect(Dialogs)

/* connect возвращает нам новую контейнерную компоненту. 
Отрисовывется Dialogs-компонента и в нее заходят данные из объектов, которые 
возвращаются из mapStateToProps и mapDispatchToProps */
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer