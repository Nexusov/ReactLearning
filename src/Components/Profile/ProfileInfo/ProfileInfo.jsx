import React from 'react';
import s from './ProfileInfo.module.css';

export default function ProfileInfo() {
	return (
		<div>
			<div>
				<img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt = ""></img>
			</div>
			<div className={s.descriptionBlock}>ava + desripiton</div>
		</div>
	);
}
