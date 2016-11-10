import React from 'react';

export default class SongIcon extends React.Component {


  constructor(props) {
    super(props);

    this.handleSongIconClick = this.handleSongIconClick.bind(this)

  }

  handleSongIconClick(e) {
  	e.preventDefault();
    console.log("IconClick, song: ", this.props.song)
  	this.props.onSongIconClick(this.props.song)
  }


  render() {
    return (
      <button onClick={this.handleSongIconClick}>
      	{this.props.song.name} <br/>
      	{this.props.song.composer} <br/>
      	{this.props.song.transcriber} <br/>

      </button>
    );
  }
}
