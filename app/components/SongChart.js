import React from 'react';

export default class SongChart extends React.Component {

  constructor(props) {
    super(props);
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
