import React from 'react';
import SongDisplayWindow from './SongDisplayWindow'
import SongChart from './SongChart'

export default class Home extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			currentView: 'home',
			currentSong: {}
		}

		this.handleSongIconClick = this.handleSongIconClick.bind(this)
		this.handleHomeButtonClick = this.handleHomeButtonClick.bind(this)
	}

	handleHomeButtonClick(e) {
		e.preventDefault();
		this.setState({
			currentView: 'home'
		})
	}

	handleSongIconClick(song) {
		this.setState({
			currentSong: song,
			currentView: 'songChart' + song.id
		})

		console.log("Song: ", song)
		console.log("State: ", this.state)
	}

	render() {
		var thingToDisplay = null;
		var songChartRE = new RegExp("(songChart)\\d+")
		console.log(songChartRE.test(this.state.currentView))
		if(songChartRE.test(this.state.currentView)) {
			thingToDisplay = <SongChart song={this.state.currentSong} onHomeButtonClick={this.handleHomeButtonClick} />
		} else {
			switch (this.state.currentView) {
				case 'home':
					thingToDisplay = <SongDisplayWindow onSongIconClick={this.handleSongIconClick} />
					break;
				default:
					thingToDisplay = "This doesn't seem right..."
				}
			}
			return (
				<div>

				{ thingToDisplay }
				</div>
				);
		}
	}
