import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

class PlayerBar extends Component {

	formatTime(time) {
		let timeSt = time.toString();
		let minutes = Math.floor(timeSt/60);
  		let seconds = timeSt - minutes * 60;
  		if (seconds < 10 && minutes === 0) {
  			timeSt = ':'+'0'+seconds;
  			timeSt = timeSt.slice(0,3);
  		}
  		else if (timeSt < 60 && minutes === 0) {
  			timeSt = ':'+seconds;
  			timeSt = timeSt.slice(0,3);
  		}
  		else if (timeSt > 59 && seconds < 10) {
  			timeSt = minutes+':'+'0'+seconds;
  			timeSt = timeSt.slice(0,4);
  		}
  		else {
  			timeSt = minutes+':'+seconds;
  			timeSt = timeSt.slice(0,4);
  		}
  		return timeSt;
  	}

  	formatDuration(duration) {
  		if (isNaN(duration)) {
  			return "-:--";
  		} else {
  		let durSt = duration.toString();
  		let minutes = Math.floor(durSt/60);
  		let seconds = durSt - minutes * 60;
  		let minSec = minutes+':'+seconds;
  		return minSec.slice(0,4);
  	}
  	}

	render() {
		let time = this.props.currentTime;
		let duration = this.props.duration;
		return (
			<section className="player-bar">
				<section id="buttons">
					<button id="previous" onClick={this.props.handlePrevClick}>
						<span className="ion-skip-backward"></span>
					</button>
					<button id="play-pause" onClick={this.props.handleSongClick} >
						<span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
					</button>
					<button id="next" onClick={this.props.handleNextClick} >
						<span className="ion-skip-forward"></span>
					</button>
				</section>
				<section id="time-control">
					<div className="current-time">{this.formatTime(time)}</div>
					<input 
						type="range" 
						className="seek-bar" 
						value={(this.props.currentTime / this.props.duration || 0)} 
						max="1"
						min="0"
						step="0.01"
						onChange={this.props.handleTimeChange}
						/>
					<div className="total-time">{this.formatDuration(duration)}</div>
				</section>
				<section id="volume-control">
				<div className="icon ion-volume-low"></div>
				<Slider
						type="range"
						className="volume-slider"
						value={this.props.volume}
						volume={this.props.volume}
						onChange={this.props.handleVChange}
						min={0}
						max={1}
						step={.01}
						/>
					<div className="icon ion-volume-high"></div>		
				</section>
			</section>
			);
	}
}

export default PlayerBar;