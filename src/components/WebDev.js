import React from "react";
import webDevImg from "../assets/images/jk6.jpg";

const WebDev = () => {
	return (
		<div className='webdev'>
			<img className='webdev-a img-webdev' src={webDevImg} alt="Gustavo Adolfo Uribe"/>
			<div className='webdev-b'>
				<p>
					During his study at Calarts, Gustavo took a web
					design class to design his own websites using
					Adobe Photoshop and Dreamweaver. He made websites
					for other musicians and other side projects. He
					decided to pursue web development by going to V
					School, a coding boot camp in Salt Lake City.
					During his studies at V School, he created several
					coding aliases, including “Codestradamus”, “the
					Bringer of Code”, and “Cholo 3000”.
				</p>
			</div>
			<div className='webdev-c'>
				<span className='webdev-pullquote'>"codeName:</span>
				<p>
					<br />
					<br />
					<br />
					Since then he has worked as a Jr. Web Designer in
					Malibu, California and has diligently increased
					his skills with online Udemy courses. He is
					currently working on web design and development
					projects in the Los Angeles area.
					<br />
					<br />
					His web portfolio:{" "}
					<a
						href='http://www.cholo3000.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						www.cholo3000.com
					</a>
				</p>
			</div>
		</div>
	);
};

export default WebDev;
