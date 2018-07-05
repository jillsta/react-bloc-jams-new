import React, { Component } from 'react';
import albumData from './../data/albums';
import { Link } from 'react-router-dom';
import Ionicon from 'react-ionicons';
import pause from './pause.svg';
import play from './play.svg';


class Album extends Component {
	constructor(props) {
		super(props);

		const album = albumData.find( album => {
			return album.slug === this.props.match.params.slug
		});

		this.state = {
			album: album,
      		currentSong: album.songs[0],
      		isPlaying: false,
      		hover: false,
      		pause: pause,
      		play: play,
		};

		this.audioElement = document.createElement('audio');
     	this.audioElement.src = album.songs[0].audioSrc;
     	this.onMouseEnter = this.setState({hover: true});
     	this.onMouseLeave = this.setState({hover: false});

	}

	play() {
     this.audioElement.play();
     this.setState({ isPlaying: true });
   	}

   	pause() {
   		this.audioElement.pause();
   		this.setState({ isPlaying: false });
   	}

   	setSong(song) {
   		this.audioElement.src = song.audioSrc;
   		this.setState({ currentSong: song });
   	}	
   	handleSongClick(song) {
   		const isSameSong = this.state.currentSong === song;
   		if (this.state.isPlaying && isSameSong) {
   			this.pause();
   		} else {
   			if (!isSameSong) { this.setSong(song); }
   			this.play();
   		}
   	}

   	mouseHover(song) {
		if (this.song.isPlaying === true) {
			this.setState{pause};
			}
		 else {
			this.setState{play};
			}
		}	

	
	render() {
		return (
			<section className="album">
				<section id="album-info">
					<img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title} />
					<div className="album-details">
						<h1 id="album-title">{this.state.album.title}</h1>
						<h2 className="artist">{this.state.album.artist}</h2>
						<div id="release-info">{this.state.album.releaseInfo}</div>
					</div>
				</section>
				<table id="song-list">
					<colgroup>
						<col id="song-number-column" />
						<col id="song-title-column" />
						<col id="song-duration-column" />
					</colgroup>
					<tbody>
					{
					this.state.album.songs.map( (song, index) => 
								<tr className="song" key={index} onClick={() => this.handleSongClick(song)} >
									<div>
									<tr id = "song-index"> {index + 1} </tr>
									<span className="ion-pause" onMouseEnter={() => this.mouseHover(song)} > </span>
									<tr id="song-title">{song.title}</tr>
									<tr id="song-duration">{song.duration}</tr>
									</div>
								</tr>
					)						
					}	
					<Ionicon icon="md-heart" isActive="false" fontSize="60px" color="red" />	
					</tbody>
				</table>
			</section>	
			);
	}
}


export default Album;