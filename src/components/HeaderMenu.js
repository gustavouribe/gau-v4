import React from "react";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
	return (
		<div className='header'>
			<nav className='nav-bar'>
				<Link to='/' className='border'>
					home
				</Link>
				<Link to='/about' className='border'>
					about
				</Link>
				<Link to='/music' className='border'>
					music
				</Link>
				<Link to='/writings' className='border'>
					writings
				</Link>
				<Link to='/web development' className='border'>
					web dev
				</Link>
				<Link to='/video' className='border'>
					video
				</Link>
			</nav>
		</div>
	);
};
export default HeaderMenu;
