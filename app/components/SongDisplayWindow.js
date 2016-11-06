import React from 'react';
import SongHelpers from '../utils/SongHelpers';
import Axios from 'axios';
import NewSongForm from './NewSongForm'
export default class SongDisplayWindow extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			songs: [],
			newSongFormData: {
				songName: '',
				composer: '',
				transcriber: ''
			}
		}

		this.getSongs = this.getSongs.bind(this)
		this.handleNewSongSubmit = this.handleNewSongSubmit.bind(this)
	}

	getSongs(e) {
		var that = this
		e.preventDefault();

		Axios.get('http://localhost:3000/song/')
			.then(function(response) {
				console.log("We got: ", response)
				that.setState({
					songs: response.data.songs
				})
				console.log("State", that.state)
			})
	}

	handleNewSongSubmit(e) {
		e.preventDefault();
		console.log('State', this.state)
		var data = {
		}
	}


  render() {
    return (
      <div>
      	
      	Here be the songs.
      	<form onSubmit={this.getSongs}>
      		<button type="submit">
      			Get Songs
      		</button>	
      	</form>

      	<NewSongForm onNewSongSubmit={this.handleNewSongSubmit} newSongFormData={this.state.newSongFormData}/>

      </div>
    );
  }
}
