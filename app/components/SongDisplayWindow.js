import React from 'react';
import SongHelpers from '../utils/SongHelpers';
import Axios from 'axios';
import NewSongForm from './NewSongForm';
import SongList from './SongList';

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
		this.updateSongList = this.updateSongList.bind(this)
	}

	getSongs(e) {
		var that = this
		e.preventDefault();

		Axios.get('http://localhost:3000/songs/')
			.then(function(response) {
				console.log("We got: ", response)
				that.setState({
					songs: response.data.songs
				})
				console.log("State: ", that.state)
			})
			.catch(function(error) {
				console.log("Error: ", error)
			})
	}

	updateSongList() {
		var that = this
		Axios.get('http://localhost:3000/songs/')
			.then(function(response) {
				console.log("We got: ", response)
				that.setState({
					songs: response.data.songs
				})
				console.log("State: ", that.state)
			})
			.catch(function(error) {
				console.log("Error: ", error)
			})		
	}

	handleNewSongSubmit(e) {
		e.preventDefault();
		var data = this.state.newSongFormData
		var that = this
		// Axios.post('http://localhost:3000/songs/', data)
		// 	.then(function(response) {
		// 		console.log("Response: ", response)
		// 	})
		// 	.catch(function(error) {
		// 		console.log("Error: ", error)
		// 	})

		Axios({
			method: "POST",
			url: "http://localhost:3000/songs/",
			data: data
		})
			.then(function(response) {
				console.log("Response: ", response)
				that.updateSongList()
			})
			.catch(function(error) {
				console.log("Error: ", error)
			})
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
      	<SongList songs={this.state.songs} />

      	<NewSongForm onNewSongSubmit={this.handleNewSongSubmit} newSongFormData={this.state.newSongFormData}/>

      </div>
    );
  }
}
