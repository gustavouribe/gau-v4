import React from "react";
import webDevImg from "../assets/images/er1.jpg";

const Writings = () => {
	return (
		<div className='writings'>
			<p>
				<span className='writing-dropcap'>While</span> taking
				a music critique class at UCSB, Gustavo developed his
				writing style and approach. A fan of George Bernard
				Shaw and Ernest Hemingway, he started blogging on his
				own website Music and Bullshit and transferred his
				blog entries onto social writing platform Medium.
				During his employment at the Santa Barbara
				Independent, he wrote several published concert
				reviews and had the opportunity to interview Latin pop
				star Juanes and Kronos Quartet founder/violinist David
				Harrington. <br />
				<br />{" "}
				<a
					href='http://www.independent.com/staff/gustavo-uribe/'
					target='_blank'
					rel='noopener noreferrer'
				>
					Santa Barbara Independent Music Articles
				</a>
				<br />
				<a
					href='http://www.independent.com/news/gustavo-gardenator/'
					target='_blank'
					rel='noopener noreferrer'
				>
					Santa Barbara Independent column Gustavo the
					Gardenator
				</a>
				<br />
				<a
					href='http://www.independent.com/news/gustavo-gardenator/'
					target='_blank'
					rel='noopener noreferrer'
				>
					Blog writings and Song Lyrics
				</a>
			</p>
			<img className='img-writing' src={webDevImg} alt="Gustavo Adolfo Uribe"/>
		</div>
	);
};

export default Writings;
