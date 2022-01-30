import React from 'react';
import preloader from '../../../Assets/images/preloader.gif';

let Preloader = (props) => {
	return (
		<div>
			<img src = {preloader} alt = "" />
		</div>
	)
}

export default Preloader