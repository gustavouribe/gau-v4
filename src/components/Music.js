import React from "react";
import { Picture } from "react-responsive-picture";
import piazolla from "../assets/images/piazzolla-mural.jpg";
import piazollaCrop from "../assets/images/piazzolla-mural-crop.jpg";
import studio from "../assets/images/stu-selfie.jpg";
import studioCrop from "../assets/images/stu-selfie-crop.jpg";
import rap from "../assets/images/rap-selfie.png";
import stiloMexico from "../assets/images/stilo-mexico.jpg";
import dummyPop from "../assets/images/dummy-pop.jpg";
import cholo20 from "../assets/images/cholo-20.jpg";
import bassClarinetFull from "../assets/scores/Bass-Clarinet-Sonata-No1-Full-Score.pdf";
import bassClarinetPart from "../assets/scores/Bass-Clarinet-Sonata-No1-Bass-Clarinet-in-Bb.pdf";

import fluteSonataFlute from "../assets/scores/Flute-Sonata-No1-Flute.pdf";
import fluteSonataFull from "../assets/scores/Flute-Sonata-No1-Full-Score.pdf";
import stringQuartetFull from "../assets/scores/String-Quartet-No1-Full-Score.pdf";
import stringQuartetViola from "../assets/scores/String-Quartet-No1-Viola.pdf";
import stringQuartetViolin1 from "../assets/scores/String-Quartet-No1-Violin-I.pdf";
import stringQuartetViolin2 from "../assets/scores/String-Quartet-No1-Violin-II.pdf";
import stringQuartetCello from "../assets/scores/String-Quartet-No1-Violoncello.pdf";

import tenorSaxFull from "../assets/scores/Tenor-Sax-Concerto-No1-Full-Score.pdf";

import starchildSuite from "../assets/scores/The-Starchild-Suite.pdf";

import trioSonataFull from "../assets/scores/Trio-Sonata-No1-Full-Score.pdf";
import trioSonataViolin1 from "../assets/scores/Trio-Sonata-No1-Violin-I.pdf";
import trioSonataViolin2 from "../assets/scores/Trio-Sonata-No1-Violin-II.pdf";
import trioSonataCello from "../assets/scores/Trio-Sonata-No1-Violoncello.pdf";

import violinStudy from "../assets/scores/Violin-Study-No1.pdf";

import windQuintetC from "../assets/scores/Wind-Quintet-No1-C-Score.pdf";
import windQuintetT from "../assets/scores/Wind-Quintet-No1-T-Score.pdf";

const Music = () => {
	return (
		<div className='music'>
			<div className='music-article'>
				<div className='music-a'>
					<p>
						<span className='paragraph-header'>
							What happens when Tango meets Hip Hop?
						</span>
						<br />
						<br /> Being a formerly trained composer and a
						Hip Hop artist/producer, Gustavo has
						experimented in using Astor Piazzolla's
						extended string techniques and has developed a
						unique sonic soundscape. String Quartet No. 1
						is a five movement Webernesque piece that
						showcases Gustavo’s codified string techniques
						and esthetic. It was written for his master
						thesis and is one of the hallmarks of his
						composition style. His works can be downloaded
						and performed freely.
					</p>
				</div>
				<div className='music-b'>
					<Picture
						className='music-image'
						sources={[
							{
								srcSet: `${piazollaCrop}`,
								media: "(max-width: 1024px)"
							},
							{
								srcSet: `${piazolla}`,
								media: "(min-width: 1024px)"
							}
						]}
						alt="Gustavo Adolfo Uribe in front of Astor Piazzolla mural in Buenos Aires"
					/>
				</div>

				<div className='music-c'>
					<Picture
						className='music-image'
						sources={[
							{
								srcSet: `${studioCrop}`,
								media: "(max-width: 1024px)"
							},
							{
								srcSet: `${studio}`,
								media: "(min-width: 1024px)"
							}
						]}
						alt="Gustavo Adolfo Uribe in his home recording studio"
					/>
				</div>
				<div className='music-d'>
					<p>
						Château Choló is Gustavo’s new record label
						imprint. He has written, produced and
						performed his own solo material. He has also
						collaborated with other Hip Hop producers and
						musicians on various albums. His Hip Hop
						albums can be found on Soundcloud, Spotify,
						and Itunes.
					</p>
				</div>
			</div>

			<div className='section-header--music'>
				{" "}
				<p />
				Music Compositions
			</div>

			<div className='composition-grid composition-grid--title'>
				<p>Title</p>
				<p>First Premiered</p>
				<p>Score/Parts</p>
			</div>

			<div className='composition-grid composition-grid--grey'>
				<p>Wind Quintet No. 1</p>
				<p>Premiered: April 24, 2013 @ Cal Arts</p>
				<p>
					<a
						href={windQuintetC}
						target='_blank'
						rel='noopener noreferrer'
					>
						C Score
					</a>
					,{" "}
					<a
						href={windQuintetT}
						target='_blank'
						rel='noopener noreferrer'
					>
						T Score
					</a>
					, &nbsp;
					<a
						href='https://soundcloud.com/gustavo-adolfo-uribe/uribe-wind-quintet-no-1#t=0:00'
						target='_blank'
						rel='noopener noreferrer'
					>
						SoundCloud Link
					</a>
				</p>
			</div>
			<div className='composition-grid composition-grid--description composition-grid--grey'>
				A 5 movement journey from the conception to expression
				of the Universe – creation, awareness, development,
				contemplation, expansion{" "}
			</div>

			<div className='composition-grid'>
				<p>Tenor Sax Concerto No. 1</p>
				<p>Written: 2010</p>
				<p>
					<a
						href={tenorSaxFull}
						target='_blank'
						rel='noopener noreferrer'
					>
						Full Score
					</a>
				</p>
			</div>
			<div className='composition-grid composition-grid--description'>
				Fusing Argentine Tango, Hip-Hop, and Latin Jazz, into
				a beautiful three movement narrative. Est Time 30′
			</div>

			<div className='composition-grid composition-grid--grey'>
				<p>String Quartet No. 1</p>
				<p>
					Premiered by: Isaura String Quartet on April 5th,
					2014 @ SPACE Arts Center
				</p>
				<p>
					<a
						href={stringQuartetFull}
						target='_blank'
						rel='noopener noreferrer'
					>
						Full Score
					</a>
					, &nbsp;
					<a
						href={stringQuartetViolin1}
						target='_blank'
						rel='noopener noreferrer'
					>
						Violin 1
					</a>
					, &nbsp;
					<a
						href={stringQuartetViolin2}
						target='_blank'
						rel='noopener noreferrer'
					>
						Violin 2
					</a>
					, &nbsp;
					<a
						href={stringQuartetViola}
						target='_blank'
						rel='noopener noreferrer'
					>
						Viola
					</a>
					, &nbsp;
					<a
						href={stringQuartetCello}
						target='_blank'
						rel='noopener noreferrer'
					>
						Cello
					</a>
				</p>
			</div>
			<div className='composition-grid composition-grid--description composition-grid--grey'>
				5 miniature movements est. 7′ <br />
				<br />
				Program Notes: In a language incorporating Argentine
				tango and hip-hop, String Quartet No. 1 paints a
				Webern-esque tapestry in 5 miniature movements. The
				emotional anguishes and passions represented in this
				piece are the very same links that make up the fabric
				of human experience. The five movements of String
				Quartet No. 1 represent snapshots of different
				vignettes across human history. The emotional bonds
				fluctuate through restated motifs being permutated
				throughout the movements.
			</div>

			<div className='composition-grid'>
				<p>Flute Sonata No. 1</p>
				<p>May 28, 2011 @ UCSB</p>
				<p>
					<a
						href={fluteSonataFull}
						target='_blank'
						rel='noopener noreferrer'
					>
						Full Score
					</a>
					, &nbsp;
					<a
						href={fluteSonataFlute}
						target='_blank'
						rel='noopener noreferrer'
					>
						Flute
					</a>
				</p>
			</div>
			<div className='composition-grid composition-grid--description'>
				Fusing Argentine Tango, Hip-Hop, Latin Jazz, and
				Mediterranean influences into a beautiful three
				movement narrative. Est Time 19′
			</div>

			<div className='composition-grid composition-grid--grey'>
				<p>Violin Study No. 1</p>
				<p>
					Commisioned by: Mona Tian Premiered: February
					22nd, 2013 @ CalARTS
				</p>
				<p>
					<a
						href={violinStudy}
						target='_blank'
						rel='noopener noreferrer'
					>
						Full Score
					</a>
					, &nbsp;
					<a
						href='https://soundcloud.com/gustavo-adolfo-uribe/uribe-violin-study-no-1'
						target='_blank'
						rel='noopener noreferrer'
					>
						SoundCloud Link
					</a>
				</p>
			</div>
			<div className='composition-grid composition-grid--description composition-grid--grey'>
				Fusing Argentine Tango techniques and modern atonal
				aesthetics, Violin Study No. 1 is not only a piece
				that technically challenges the performer, but acts as
				a physiological mirror. Est. 7′
				<br />
				<br />
				Program Notes: Memories and dreams are what shape our
				present realities. Sometimes they can help us find
				ourselves and sometimes, they can haunt us. The main
				lyrical theme of the piece represents our
				moment-to-moment reality. It is constanly interrupted
				and influenced by our memories of the past, and our
				worries of the furure. The constant fluctuation of the
				E-F motif during the whole of the piece, is the
				ripples of experience that shape our lives.
			</div>

			<div className='composition-grid'>
				<p>Trio Sonata No. 1</p>
				<p>Premiered: May 28, 2011 @ UCSB</p>
				<p>
					<a
						href={trioSonataFull}
						target='_blank'
						rel='noopener noreferrer'
					>
						Full Score
					</a>
					, &nbsp;
					<a
						href={trioSonataViolin1}
						target='_blank'
						rel='noopener noreferrer'
					>
						Violin 1
					</a>
					, &nbsp;
					<a
						href={trioSonataViolin2}
						target='_blank'
						rel='noopener noreferrer'
					>
						Violin 2
					</a>
					, &nbsp;
					<a
						href={trioSonataCello}
						target='_blank'
						rel='noopener noreferrer'
					>
						Cello
					</a>
					, &nbsp;
					<a
						href='https://soundcloud.com/gustavo-adolfo-uribe/sets/trio-sonata-no-1'
						target='_blank'
						rel='noopener noreferrer'
					>
						SoundCloud Link
					</a>
				</p>
			</div>
			<div className='composition-grid composition-grid--description'>
				A neo-classical three movement piece for 2 violins,
				cello and piano inspired by Argentine Tango. Est Time
				12′
			</div>

			<div className='composition-grid composition-grid--grey'>
				<p>Bass Clarinet Sonata No. 1</p>
				<p>
					Movements I, II May 28, 2011 @ UCSB & Movments III
					April 24, 2013 @ CalARTS
				</p>
				<p>
					<a
						href={bassClarinetFull}
						target='_blank'
						rel='noopener noreferrer'
					>
						Full Score
					</a>
					, &nbsp;
					<a
						href={bassClarinetPart}
						target='_blank'
						rel='noopener noreferrer'
					>
						Bass Clarinet in Bb
					</a>
					, &nbsp;
					<a
						href='https://soundcloud.com/gustavo-adolfo-uribe/sets/bass-clarinet-sonata-no-1'
						target='_blank'
						rel='noopener noreferrer'
					>
						SoundCloud Link
					</a>
				</p>
			</div>
			<div className='composition-grid composition-grid--description composition-grid--grey'>
				Fusing Argentine Tango, Hip-Hop, Latin Jazz, and
				Mediterranean influences into a beautiful three
				movement narrative. Est Time 14′
			</div>
			<div className='section-header--music'>
				{" "}
				<p />
				Discography
			</div>

			<div className='discography-grid'>
				<div>
					<img className='cover-images' src={cholo20} />
				</div>

				<div>
					<p>
						<span className='discography-grid--title' alt="Cholo 2.0 artwork">
							Cholo 2.0
						</span>{" "}
						<br />
						<br />
						Clifford Gilmore – Trumpet
						<br /> Evan Montgomery - Electric Guitar
						<br /> Jacques Philipp Pradel – Conga, Guiro{" "}
						<br />
						Logan Hone – Alto Saxophone <br />
						Matthew Allen – Vibraphone <br />
						Sydney Arcane – Female Vocals <br />
						Zephyr Avalon – Electric Bass <br />
						<br />
						"If They Were Here" – contains music samples
						from concert theatre work "Flow" by Christina
						Ward <br />
						<br />
						All Songs Written, Performed, and Produced by
						G. A. U. Album Co-Produced by Zephyr Avalon{" "}
						<br />
						Recorded at: The Dizzy Gillespie Digital
						Recording Studio (DRS) @ CalARTS <br />
						Thug Life Studios (sublet bedroom) @ Zephyr
						Avalon's Residence in Valencia, CA
						<br />
						Château Choló Studios (G.A.U's bedroom) @
						Gustavo's Rented Room in Santa Barbara, CA
						<br />
						<br />
						Edited and Mixed by G. A. U. <br />
						Mastered by DoctorMix.com <br />
						Album Artwork by Isaac Welsh Album <br />
						Graphic Design by G. A. U. <br />
						Executive Producer Gustavo Adolfo Uribe
						Published by Château Choló (ASCAP) © 2016
					</p>
				</div>
				<div>
					<img className='cover-images' src={dummyPop} alt="The Dummy Pop EP artwork"/>
				</div>
				<div>
					<span className='discography-grid--title'>
						the dummy pop ep
					</span>{" "}
					<br />
					<br />
					<p>
						A tongue-in-cheek satire of cheesy pop music,
						inspired by the dance hits of the 90's and
						elements of contemporary electronic dance
						music. <br />
						<br />
						Released March 3, 2014 <br />
						<br />
						Music written, produced, performed, mixed, and
						graphic design by: Gustavo Adolfo Uribe <br />
						<br />
						Female Vocals: Samantha Hopkins <br />
						Kelliann Wright
						<br />
						<br />
						Artwork by: Rodger Lehman <br />
						<br />
						Mastered by: <br />
						Alex DeYoung @ Oasis Mastering
					</p>
				</div>
				<div>
					<img className='cover-images' src={stiloMexico} alt="Stilo Mexico Redux EP artwork"/>
				</div>
				<div>
					{" "}
					<span className='discography-grid--title'>
						stilo mexico redux ep
					</span>{" "}
					<br />
					<br />
					<p>
						An autobiographical and sociopolitical rap EP
						challenging the "American Dream"; A
						Mexican-American fed up with student loans and
						minimum wage jobs. <br />
						<br /> Released October 13, 2013 <br />
						<br />
						Music written, produced, performed, mixed, and
						graphic design by: Gustavo Adolfo Uribe
						<br />
						<br /> Artwork by: Hoyjin Bae <br />
						<br />
						Mastered by:
						<br />
						Alex DeYoung @ Oasis Mastering{" "}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Music;
