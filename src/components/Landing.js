import React from 'react';
import './Landing.css';
import chooserecord from './chooserecord.jpg';
import headphones from './headphones.jpg';
import musicenjoy from './musicenjoy.jpg';
import Image from 'react-image-resizer';


const Landing = () => (
	<section className="landing">
		<h1 className="hero-title">Turn the music up!</h1>

	<section className="selling-points">
		<div className="point">
			<h2 className="point-title1">Choose your music</h2>
			<img className="choose-record" src={chooserecord} height={200} width={300} />
			<p className="point-description1">The world is full of music; why should you have to listen to music that someone else chose? </p>
		</div>
		<div className="point">
			<h2 className="point-title2">Unlimited, streaming, ad-free</h2>
			<img className="music-enjoy" src={musicenjoy} height={200} width={300}/>
			<p className="point-description2">No arbitrary limits. No distractions.</p>
			<br></br>
			<br></br>
		</div>
		<div className="point">
			<h2 className="point-title3">Mobile enabled</h2>
			<img className="headphones-go" src={headphones} height={200} width={300}/>
			<p className="point-description3">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
      	</div>
    </section>
    </section>
 );

export default Landing;
//comment