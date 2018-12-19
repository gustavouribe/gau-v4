import React, { Component } from "react";
import SlideMenu from "./SlideMenu";
import { Link } from "react-router-dom";

class MenuBtn extends Component {
	constructor() {
		super();
		this.state = {
			isToggleOn: false
		};
	}

	handleClick = () => {
		this.setState(state => ({
			isToggleOn: !state.isToggleOn
		}));
	};

	render() {
		var visibility = "sidebar sidebar--show";

		if (this.state.isToggleOn === false) {
			visibility = "sidebar sidebar--hide";
		}
		return (
			<div>
				<i
					className='fas fa-bars toggle-btn'
					onClick={this.handleClick}
				/>
				
					
						<nav className={visibility}>
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
							<Link
								to='/web development'
								className='border'
							>
								web dev
							</Link>
							<Link to='/video' className='border'>
								video
							</Link>
						</nav>
					
			
			</div>
		);
	}
}

export default MenuBtn;
