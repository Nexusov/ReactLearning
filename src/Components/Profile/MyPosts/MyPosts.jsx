import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import { Field, Form, Formik } from 'formik';

export default function MyPosts(props) {

	let postsElements = props.posts.map ( p => <Post message = {p.message} likesCount = {p.likesCount} />)

	let newPostElement = React.createRef();

	let onAddPost = (values) => {
		props.addPost(values.newPostText)
	}

	return (
		<div className = {s.postsBlock}>
			<h3>my posts</h3>
			<AddNewPostForm onSubmit = {onAddPost} />
			<div className = {s.posts}>
				{postsElements}
			</div>
		</div>
	);
}

const initialValues = {
	newPostText: '',
};

const AddNewPostForm = (props) => {

	return (
		<Formik initialValues = {initialValues} onSubmit = {props.onSubmit}>
			<Form>
				<div>
					<Field
						type = 'text'
						name = {'newPostText'}
						ref = {props.newPostElement}
					/>
				</div>
				<div>
					<button type = 'submit'>Add post</button>
				</div>
			</Form>
		</Formik>
	);
} 