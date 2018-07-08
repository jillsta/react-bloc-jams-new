import React, { Component } from 'react';
import albumData from './../data/albums';
import { Link } from 'react-router-dom';
import Ionicon from 'react-ionicons';
import pause from './pause.svg';
import play from './play.svg';
import './Album.css'; 


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
      		isHovering: false,
      		hoveredIndex: -1,
      		pause: pause,
      		play: play,
      		icon: "",
		};

		this.audioElement = document.createElement('audio');
     	this.audioElement.src = album.songs[0].audioSrc;
		this.handleMouseHover = this.handleMouseHover.bind(this);

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
	
   handleMouseHover(index) {
   	this.setState(this.toggleHoverState);
   	this.setState({
      hoveredIndex: index,
  	  });   	
   }

   toggleHoverState(state) {
   	return {
   		isHovering: !state.isHovering,
   	};
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
								<span className="song" key={index} onClick={() => this.handleSongClick(song)} >
									<div className = "song-index" onMouseEnter={() => this.handleMouseHover(index)}
									onMouseLeave={this.handleMouseHover}> 
									{!this.state.isHovering && <span> {index + 1} </span>}
									{this.state.hoveredIndex === index && this.state.currentSong === song && this.state.isHovering && this.state.isPlaying && <span><img className = "song-index" src = {pause} alt="pause"/></span>}
									{this.state.hoveredIndex === index && this.state.isHovering && !this.state.isPlaying && <span><img className = "song-index" src = {play} alt="play"/></span>}
									{this.state.hoveredIndex === index && this.state.currentSong === song.pause && this.state.isHovering && <span><img className = "song-index" src = {play} alt="pause2play"/></span>}			
									<tr id="song-title">{song.title}</tr>
									<tr id="song-duration">{song.duration}</tr>
									</div>
								</span>
					)						
					}
					</tbody>	
					<Ionicon icon="md-heart" isActive="false" fontSize="60px" color="red" />	
				</table>
			</section>	
			);
	}
}


export default Album;