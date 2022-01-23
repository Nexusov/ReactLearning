import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../Redux/profile-reducer'


export default function MyPosts(props) {

	let postsElements = props.posts.map ( p => <Post message={p.message} likesCount={p.likesCount} />)

	let newPostElement = React.createRef();

	let onAddPost = () => {
		props.addPost()
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text)
	}

	return (
		<div className={s.postsBlock}>
			<h3>my posts</h3>
			<div>
				<div>
					<textarea onChange = {onPostChange}  ref = {newPostElement} value = {props.newPostText} />
				</div>
				<div>
					<button onClick = {onAddPost}>Add post</button>
				</div>
			</div>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	);
}
