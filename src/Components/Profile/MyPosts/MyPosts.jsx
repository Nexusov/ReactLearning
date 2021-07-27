import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

export default function MyPosts(props) {

/* 	let posts= [
		{ id: 1, message: 'Hello World!', likesCount: 0},
		{ id: 2, message: 'My first post', likesCount: 23},
		{ id: 3, message: 'Blabla', likesCount: 2},
		{ id: 4, message: 'Da', likesCount: 1},
	]; */
	
	let postsElements = props.posts.map ( p => <Post message={p.message} likesCount={p.likesCount} />)

	return (
		<div className={s.postsBlock}>
			<h3>my posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add post</button>
				</div>
			</div>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	);
}
