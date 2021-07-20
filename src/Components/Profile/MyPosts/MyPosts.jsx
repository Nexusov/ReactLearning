import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

export default function MyPosts() {
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
				<Post message="Hello World!" likesCount="0" />
				<Post message="My first post" likesCount="23" />
			</div>
		</div>
	);
}
