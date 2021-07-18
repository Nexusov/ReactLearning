import React from 'react';
import s from './Profile.module.css'

export default function Profile() {
	return (
		<div>
			<div className={s.content}>
				<div>
					<img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></img>
				</div>
				<div>ava + desripiton</div>
				<div>
					my posts
					<div>new post</div>
					<div className={s.posts}>
						<div className={s.item}>post 1</div>
						<div className={s.item}>post 2</div>
					</div>
				</div>
			</div>
		</div>
	);
}
