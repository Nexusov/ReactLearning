import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

export default function MyPosts(props) {

	let postsElements = props.posts.map ( p => <Post message={p.message} likesCount={p.likesCount} />)

	let newPostElement = React.createRef();

	let addPost = () => {
		let text = newPostElement.current.value;
		props.addPost(text)
		newPostElement.current.value = ''
	}

	return (
		<div className={s.postsBlock}>
			<h3>my posts</h3>
			<div>
				<div>
					<textarea ref = {newPostElement}></textarea>
				</div>
				<div>
					<button onClick = {addPost}>Add post</button>
				</div>
			</div>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	);
}
