import React from 'react';
import SongHelpers from '../utils/SongHelpers';
import Axios from 'axios';

export default class SongDisplayWindow extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			songs: []
		}

		this.getSongs = this.getSongs.bind(this)
	}

	getSongs(e) {
		e.preventDefault();

		Axios.get('http://localhost:3000/song/')
			.then(function(response) {
				console.log("We got: ", response)
			})
	}


  render() {
    return (
      <div>
      	
      	Here be the songs.
      	<form onSubmit={this.getSongs}>
      		<button type="submit" />
      	</form>

      </div>
    );
  }
}
