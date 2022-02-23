import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { Field, Form, Formik } from 'formik';

export default function Dialogs(props) {

	let state = props.dialogsPage;

	let dialogsElements = state.dialogs.map ( d => <DialogItem name = {d.name} key = {d.id} id = {d.id} /> );
	let messagesElements = state.messages.map ( m => <Message message = {m.message} key = {m.id} /> );

	let addNewMessage = (values) => {
		props.sendMessage(values.newMessageBody)
		console.log(values)
	} 

	if (!props.isAuth ) {
		return <Redirect to = '/Login' /> //! в react-router-dom V6 нет Redirect, вместо него <Navigate to = '/Login'/> */
	}

	return (
		<div className = {s.dialogs}>
			<div className = {s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className = {s.messages}>
				<div>{messagesElements}</div>
			</div>
			<AddMessageForm onSubmit = {addNewMessage}/>
		</div>
	);
}

const initialValues = {
	newMessageBody: '',
};

const AddMessageForm = (props) => {
	return (
		<Formik initialValues = {initialValues} onSubmit = {props.onSubmit}>
		<Form>
			<div>
				<Field
					id = 'newMessageBody'
					name = {'newMessageBody'}
					placeholder = {'Enter your message'}
				></Field>
			</div>
			<div>
				<button type = 'submit'>Send</button>
			</div>
		</Form>
		</Formik>
	);
};
