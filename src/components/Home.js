import React, { Component } from "react";
import backgroundVideo from "../assets/video/gau-website-video.mp4";
import backgroundVideoMobile from "../assets/video/gau-website-video-mobile.mp4";

class Home extends Component {
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
		var audio = false;

		if (this.state.isToggleOn === false) {
			audio = true;
		}
		return (
			<div className='home' onClick={this.handleClick}>
				<video
					loop
					autoPlay
					muted={audio}
					id='myVideo'
					className='video'
				>
					<source
						// src='http://techslides.com/demos/sample-videos/small.mp4'
						src={backgroundVideoMobile}
						type='video/mp4'
					/>
				</video>
				<div className='hero'>
					<p className='hero__header'>
						GUSTAVO ADOLFO URIBE
					</p>
					<p className='hero__sub-header'>
						post-modern renaissance man
					</p>

					{this.state.isToggleOn ? (
						<span className='fa-stack fa-2x volume'>
							<i className='fa fa-circle fa-stack-2x icon-background' />
							<i
								className='fas fa-stack-1x fa-volume-up'
								onClick={this.handleClick}
							/>
						</span>
					) : (
						<span className='fa-stack fa-2x volume'>
							<i className='fa fa-circle fa-stack-2x icon-background' />
							<i
								className='fas fa-stack-1x fa-volume-mute '
								onClick={this.handleClick}
							/>
						</span>
					)}
				</div>
			</div>
		);
	}
}
export default Home;
