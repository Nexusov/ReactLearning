import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import { updateStatus } from '../../../Redux/profile-reducer';

export default function ProfileInfo(props) {
	if (!props.profile) {
		return <Preloader />
	}

	return (
		<div>
			{/* <div>
				<img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt = ""></img>
			</div> */}
			<div className = {s.descriptionBlock}>
				<img src = {props.profile.photos.large} alt = '' />
				<ProfileStatus status = {props.status} updateStatus = {props.updateStatus} />
			</div>
		</div>
	);
}
