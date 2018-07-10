import React, { Component } from 'react';
import albumData from './../data/albums';
import { Link } from 'react-router-dom';
import Ionicon from 'react-ionicons';
import pause from './pause.svg';
import play from './play.svg';
import Image from 'react-image-resizer';
import styles from './Album.css';

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
	
   handleMouseHover(song,index){
    this.setState({
      	hoveredIndex: index,
      	isHovering: true
    	});
	} 

  unHover(e,index){
    this.setState({
      isHovering: false,
      hoveredIndex: -1
    });
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
				<div id="song-list">
						<div id="song-number-column" />
						<div id="song-title-column" />
						<div id="song-duration-column" />
					</div>
					<tbody align="center">
					{	
					this.state.album.songs.map( (song, index) =>  
								<tr id="song" key={index} onClick={() => this.handleSongClick(song)}> 
								<tr id="hoverSong" onMouseEnter={(song) => this.handleMouseHover(song,index)} onMouseLeave={(e) => this.unHover(e,index)}>
									
										{<tr className="index"> {index + 1} </tr>}
										{this.state.hoveredIndex === index && this.state.currentSong === song && this.state.isHovering 
											&& this.state.isPlaying && <tr><img className = "song-index" src = {pause} 
											width={45} height={45} alt="pause"/></tr>}
										{this.state.hoveredIndex === index && this.state.isHovering && !this.state.isPlaying 
											&& <tr><img className = "song-index" src = {play} width={45} height={45} 
											alt="play"/></tr>}
										{this.state.hoveredIndex === index && this.state.currentSong === song.pause && 
											this.state.isHovering && <tr><img className = "song-index" src = {play} 
											width={45} height={45} alt="pause2play"/></tr>}		

									<tr id="song-title">{song.title}</tr>
									<tr id="song-duration">{song.duration}</tr>
								</tr>
								</tr>
					)						
					}
					</tbody>
					<Ionicon icon="md-heart" isActive="false" fontSize="60px" color="red" />
			</section>	
			);
	}
}


export default Album;
