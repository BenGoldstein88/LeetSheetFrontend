import React from 'react';

export default class SongIcon extends React.Component {


  constructor(props) {
    super(props);

    this.onSongIconClick = this.onSongIconClick.bind(this)

  }

  onSongIconClick(e) {
  	e.preventDefault();
  	this.props.onSongIconClick(this.props.song)
  }


  render() {
    return (
      <button onClick={this.onSongIconClick}>
      	{this.props.song.name} <br/>
      	{this.props.song.composer} <br/>
      	{this.props.song.transcriber} <br/>

      </button>
    );
  }
}
