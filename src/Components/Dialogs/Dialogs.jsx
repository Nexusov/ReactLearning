import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';


export default function Dialogs(props) {

let dialogsElements = props.state.dialogs.map ( d => <DialogItem name={d.name} id={d.id} /> );
let messagesElements = props.state.messages.map ( m => <Message message={m.message} /> );

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messagesElements}
			</div>
		</div>
	);
}
