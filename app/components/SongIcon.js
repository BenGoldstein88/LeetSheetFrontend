import React from 'react';

export default class SongIcon extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button>
      	{this.props.song.name} <br/>
      	{this.props.song.composer} <br/>
      	{this.props.song.transcriber} <br/>


      </button>
    );
  }
}
