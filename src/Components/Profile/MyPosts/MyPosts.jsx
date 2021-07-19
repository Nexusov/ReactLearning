import React from 'react';
import Post from './Post/Post'
import s from './MyPosts.module.css';

export default function MyPosts() {
	return (
		<div>
			my posts
			<div>
				<textarea></textarea>
				<button>Add post</button>
			</div>
			<div className={s.posts}>
				<Post message='Hello World!' likesCount='0'/>
				<Post message='My first post' likesCount='23'/>
			</div>
		</div>
	);
}
