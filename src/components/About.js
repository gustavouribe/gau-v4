import React from "react";
import { Picture } from "react-responsive-picture";
import aboutImg from "../assets/images/jk7.jpg";
import aboutImgCrop from "../assets/images/jk7-crop.jpg";
const About = () => {
	return (
		<div className='about'>
			<Picture
				className='about-image'
				sources={[
					{
						srcSet: `${aboutImgCrop}`,
						media: "(max-width: 1200px)"
					},
					{
						srcSet: `${aboutImg}`,
						media: "(min-width: 1200px)"
					}
				]}
				alt="Gustavo Adolfo Uribe"
			/>

			<p>
				<span className='about-dropcap'>G</span>ustavo Adolfo
				Uribe, born and raised in Santa Barbara, California,
				started writing raps when he was in junior high
				school. What progressed into beat making and producing
				hip hop acts during high school blossomed into singing
				a local hip hop artist Alex Presley aka Crazy onto his
				record label, Uribe Records. In 2004, He produced,
				edited and released “Alex in Wonderland” in local
				stores and on online distributors.
				<br />
				<br />
				After partying ways with Alex and disbanding Uribe
				Records, he re-enrolled in Santa Barbara City College
				into music classes. After five years studying at SBCC,
				he transferred to the University of California Santa
				Barbara’s College of Creative Studies to pursue his
				Bachelor of Arts in Music Composition. While studying
				at UCSB he discovered the music of Astor Piazzolla and
				joined the UCSB Argentine Tango club. During the
				Summer of 2010, he studied abroad in Buenos Aires, and
				studied Tango music and dance. He was accepted into
				California Institute of the Arts for graduate studies
				and started Calarts Tango, teaching Argentine Tango
				dance during his first year. For his second year, he
				sang and wrote music for the Calarts Salsa Band and
				released two Hip Hop EP’s: Stilo Mexico Redux and The
				Dummy Pop.
				<br />
				<br />
			</p>
			<p className='about-second-paragraph'>
				Returning to Santa Barbara after graduating, he was
				hired as an Administrative Assistant to the award
				winning weekly newspaper, The Santa Barbara
				Independent. While at the SB Indy, he wrote music
				articles and contributed the real estate section with
				his column “Gustavo the Gardenator”. He was introduced
				to Isaac Welsh, son of News Editor Nick Welsh, and
				collaborated on music and artwork. They eventually
				released album MCMXCVIII. He also collaborated with
				Fernando Lemus on a hip hop album Life of Cholo, named
				after Gustavo’s Youtube vlog. A Youtube cooking show,
				Cuisine Choló, was created with chef Luis Castro and
				was produced with Luis’s brother Sergio Castro.
				<br />
				<br />
				With an aptitude for web design, Gustavo attended V
				School in Salt Lake city, to learn full stack web
				development. He is currently living in Los Angeles,
				California and is pursuing a career as a web
				developer, while continuously producing music and
				video projects.
			</p>
		</div>
	);
};
export default About;
