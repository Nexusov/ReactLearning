import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

let DialogItem = (props) => {
	let path = '/dialogs/' + props.id;
	return (
		<div className={s.dialog + ' ' + s.active}>
			<NavLink to={path}> {props.name} </NavLink>
		</div>
	);
};

let Message = (props) => {
	return <div className={s.message}> {props.message} </div>;
};

export default function Dialogs() {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<DialogItem name="Yegor" id="1" />
				<DialogItem name="Marshak" id="2" />
				<DialogItem name="Ansimist" id="3" />
				<DialogItem name="Kirill" id="4" />
				<DialogItem name="Sito" id="5" />
				<DialogItem name="Mag7" id="6" />
			</div>
			<div className={s.messages}>
				<Message message="Hi" />
				<Message message="Where are you" />
				<Message message="Bye" />
				<Message message="I need your bike, bro" />
				<Message message="Who did it ?" />
				<Message message="Hei, snakker du norsk ?" />
			</div>
		</div>
	);
}
