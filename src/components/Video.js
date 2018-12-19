import React from "react";
import videoSelfie from "../assets/images/gh4-selfie-edit.jpg";
import cuisineCholo from "../assets/images/cuisine-cholo.jpg";

const Video = () => {
	return (
		<div>
			<br />
			<hr />
			<div className='video-about'>
				<img
					className='img-video video-about-a'
					src={videoSelfie}
					alt='Gustavo Adolfo Uribe'
				/>
				<div className='video-about-b'>
					<p className='video-dropcap'>Being surrounded</p>{" "}
					<p>
						by video and directing students at Calarts,
						Gustavo had the opportunity to collaborate on
						several projects. He wanted to make music
						videos for his Hip Hop EPs, but his video
						student friends were often times too busy to
						take on that kind of project. So Gustavo
						decided to learn videography himself so he
						could produce his own music videos. After
						graduating Calarts, Gustavo became an intern
						for Dajen Productions in Santa Barbara.
						Gustavo also bought his own camera equipment
						and began collaborating with local comic
						actors and writers: Alex Coleman, Ted
						Mccormick, and Mike Winger. He also created a
						cooking show Cuisine Choló, with childhood
						friends Luis Castro and Sergio Castro. He
						eventually released several music videos and
						has continued to become Youtube content
						creator with vlog Life of Cholo.
					</p>
				</div>
			</div>
			<hr />
			<div className='section-header--video'>
				{" "}
				<p>Cuisine Choló</p>
			</div>
			<div className='cuisine-cholo'>
				<div className='cuisine-cholo-c'>
					<p>
						Cuisine Choló is a Youtube comedy cooking show
						with a chicano flair, created by childhood
						friends Gustavo Uribe and Luis and Sergio
						Castro. Gustavo created the theme song and
						stars as the cooking sidekick, Luis is an
						accomplished chef that has studied in Spain
						and worked with Wolfgang Puck in Los Angeles,
						and Sergio is a the director and visionary.
					</p>{" "}
				</div>
				<div className='cuisine-cholo-d'>
					<p>
						<img
							className='img-cuisine-cholo'
							src={cuisineCholo}
							alt='Cuisine Cholo logo'
						/>
					</p>
					<p>
						{" "}
						<a
							href='https://www.youtube.com/channel/UCFQ8wvVcX9VjaiN_ezQ_uxg'
							target='_blank'
							rel='noopener noreferrer'
						>
							<i class='fab fa-youtube' />
						</a>
						<a
							href='https://medium.com/@gustavoadolfouribemusic'
							target='_blank'
							rel='noopener noreferrer'
						>
							<i class='fab fa-medium-m' />
						</a>
					</p>
				</div>
			</div>
			<div className='section-header--video'>
				{" "}
				<p>Music Videos</p>
			</div>
			<div className='music-video'>
				<iframe
					className='music-video-youtube'
					width='560'
					height='315'
					src='https://www.youtube.com/embed/MZei9t-jzdY'
					frameborder='0'
					allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen
				/>
				<iframe
					className='music-video-youtube'
					width='560'
					height='315'
					src='https://www.youtube.com/embed/rm7N2V3Ygkg'
					frameborder='0'
					allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen
				/>
				<iframe
					className='music-video-youtube'
					width='560'
					height='315'
					src='https://www.youtube.com/embed/SgJHx2DJX4Y'
					frameborder='0'
					allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen
				/>
			</div>
		</div>
	);
};

export default Video;
