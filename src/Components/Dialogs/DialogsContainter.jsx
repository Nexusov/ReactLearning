import React from 'react';
import { sendMessageCreator } from '../../Redux/dialogs-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Dialogs from './Dialogs';
import { compose } from 'redux';

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: (newMessageBody) => {
			dispatch(sendMessageCreator(newMessageBody))
		},
	}
}

/* connect возвращает нам новую контейнерную компоненту. 
Отрисовывется Dialogs-компонента и в нее заходят данные из объектов, которые 
возвращаются из mapStateToProps и mapDispatchToProps */

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs)