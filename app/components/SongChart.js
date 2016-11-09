import React from 'react';
import Axios from 'axios';

export default class SongChart extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      sections: [],
      measures: {},
      beats: {},
      chords: {},
      roots: {}

    }
  }

  componentWillMount() {
    var url = 'http://localhost:3000/songs/'+ this.props.song.id
    var that = this
    Axios.get(url)
    .then(function(response) {
      console.log("Response: ", response)
      that.setState({
        sections: response.sections,
        measures: response.measures,
        beats: response.beats,
        chords: response.chords,
        roots: response.roots
      })
      console.log("State: ", that.state)
    })
    .catch(function(error) {
      console.log("Error: ", error)
    })

  }

  render() {
    return (
      <div>
      {this.props.song.name}
      <button onClick={this.props.onHomeButtonClick} >
      Home
      </button>
      </div>
      );
  }
}
