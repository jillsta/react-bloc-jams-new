import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';
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
      		isHovering: false,
      		hoveredIndex: -1,
      		pause: pause,
      		play: play,
		};

		this.audioElement = document.createElement('audio');
     	this.audioElement.src = album.songs[0].audioSrc;
		this.handleMouseHover = this.handleMouseHover.bind(this);

	}

	hoverIcon(index,song) {
		if (this.state.hoveredIndex === index && this.state.isHovering && !this.state.isPlaying) {
			return (<div className="ion-play"></div>);
		} else if (this.state.hoveredIndex === index && this.state.currentSong === song && this.state.isHovering && this.state.isPlaying) {
			return (<div className="ion-pause"></div>);
		} else if (this.state.hoveredIndex === index && this.state.currentSong !== song && this.state.isHovering) {
			return (<div className="ion-play"></div>);
		}		
		else {
		return (index + 1);
		}
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

  handlePrevClick() {
  	const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
  	const newIndex = Math.max(0, currentIndex - 1);
  	const newSong = this.state.album.songs[newIndex];
  	this.setSong(newSong);
  	this.play();
  }

   handleNextClick() {
  	const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
  	const newIndex = Math.max(0, currentIndex + 1);
  	const newSong = this.state.album.songs[newIndex];
  	this.setSong(newSong);
  	this.play();
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
				<section className="songs">
				<div>
				<table>
					<colgroup>
						<col id="song-number-column"/>
						<col id="song-title-column"/>
						<col id="song-duration-column"/>
					</colgroup>
					<tbody>	
					{
						this.state.album.songs.map((song, index)=>
						<tr key={index} onClick={() => this.handleSongClick(song)}>
						<td className="hover-song-play" onMouseEnter={(song) => this.handleMouseHover(song,index)} onMouseLeave={(e) => this.unHover(e,index)}>{this.hoverIcon(index,song)}</td>
						<td className="song-title">{song.title}</td>
						<td className="song-duration">{song.duration}</td>
						</tr>
					)}
					</tbody>	
				</table>
				</div>
				</section>	
				<PlayerBar 
					isPlaying={this.state.isPlaying} 
					currentSong={this.state.currentSong} 
					handleSongClick={() => this.handleSongClick(this.state.currentSong)}
					handlePrevClick={() => this.handlePrevClick()}
					handleNextClick={() => this.handleNextClick()}
				/>
				</section>	
			);

		}
}


export default Album;
