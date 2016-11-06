import React from 'react';

export default class NewSongForm extends React.Component {


  constructor(props) {
    super(props);

    this.handleSongNameChange = this.handleSongNameChange.bind(this)
    this.handleComposerChange = this.handleComposerChange.bind(this)
    this.handleTranscriberChange = this.handleTranscriberChange.bind(this)

  }

  handleSongNameChange(e) {
  	var songName = e.target.value
  	this.props.newSongFormData.songName = songName
  }

  handleComposerChange(e) {
  	var composer = e.target.value
  	this.props.newSongFormData.composer = composer
  }

  handleTranscriberChange(e) {
  	var transcriber = e.target.value
  	this.props.newSongFormData.transcriber = transcriber
  }  

  render() {
    return (
      <div>
      	<form onSubmit={this.props.onNewSongSubmit}	>
      		Name: <input type='text' name='songName' onChange={this.handleSongNameChange} /> <br/>
      		Composer: <input type='text' name='composer' onChange={this.handleComposerChange} /><br/>
      		Transcriber: <input type='text' name='transcriber' onChange={this.handleTranscriberChange} /><br/>
      		<button type='submit'>
      			Create Song
      		</button>
      	</form>

      </div>
    );
  }
}
