import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export default function Profile(props) {
	return (
		<div>
			<ProfileInfo />
			<MyPostsContainer 
				store = {props.store} />
		</div>
	);
}
