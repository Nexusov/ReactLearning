import React from 'react';
import s from './Post.module.css';

export default function Post() {
	return (
		<div className={s.item}>
			<img src="https://pbs.twimg.com/profile_images/435523312404267008/OdfbG_oN_400x400.jpeg" />
			post 1
			<div>
				<span>Like</span>
			</div>
		</div>
	);
}
