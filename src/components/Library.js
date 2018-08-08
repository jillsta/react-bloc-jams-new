import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import Image from 'react-image-resizer';
import './Library.css';

class Library extends Component {
	constructor(props) {
		super(props);
		this.state = { albums: albumData };
	}
	
	render() {
		return (
		<section className="library">
		{
			this.state.albums.map( (album, index) =>
				<Link to={`/album/${album.slug}`} key={index}>
					<img src={album.albumCover} alt={album.title} height={300} width={300} />
					<div className="album-data">{album.title}</div>
					<div className="album-data">{album.artist}</div>
					<div className="album-data">{album.songs.length} songs</div>
				</Link>
			)
		}
		</section>
		);
	}
}

export default Library;