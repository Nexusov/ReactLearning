import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Header.module.css";

const Header = (props) => {
	return (
		<header className={s.header}>
			<img src="https://play-lh.googleusercontent.com/Ri6xV_kcCS4PUduDTt2-g3i0rx5o2w7yOHzubc93WRD2AB7GKm9Iqg1hCY3SFox3aQ" alt = ""/>
			
			<div className = {s.loginBlock} >
				{ props.isAuth ? props.login : <NavLink to = {'/login'}>Login</NavLink> }
			</div>
		</header>
	);
};

export default Header;
