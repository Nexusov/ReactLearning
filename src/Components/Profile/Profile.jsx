import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { updateStatus } from '../../Redux/profile-reducer';

export default function Profile(props) {
	return (
		<div>
			<ProfileInfo profile = {props.profile} status = {props.status} updateStatus = {props.updateStatus} />
			<MyPostsContainer />
		</div>
	);
}
