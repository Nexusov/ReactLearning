import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';


let dialogs = [
	{ id: 1, name: 'Yegor' },
	{ id: 2, name: 'Marshak' },
	{ id: 3, name: 'Ansimist' }, 
	{ id: 4, name: 'Kirill' },
	{ id: 5, name: 'Sito' },
	{ id: 6, name: 'Mag7' },
];

let messages = [
	{ id: 1, message: 'Hi'},
	{ id: 2, message: 'Where are you'},
	{ id: 3, message: 'Bye'}, 
	{ id: 4, message: 'I need your bike, bro'},
	{ id: 5, message: 'Who did it ?' },
	{ id: 6, message: 'Hei, snakker du norsk ?' },
];

let dialogsElements = dialogs.map ( d => <DialogItem name={d.name} id={d.id} /> );
let messagesElements = messages.map ( m => <Message message={m.message} /> );

export default function Dialogs() {
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
